
import './App.css';
import './components/Animal.css'
import { useState } from "react";
import zooData from "./assets/zooData.json";
import SortOption from './components/SortOption';
import FilterOption from './components/FilterOption';
import Animal from "./components/Animal.js";


function App() {
  const allAnimals = sortDefault([...zooData], "name");
  const [currentAnimals, updateCurrentAnimals] = useState(allAnimals);
  const [friendsList, updateFriendsList] = useState([]);
  const [currentSort, updateCurrentSort] = useState("name");

  const [stackHeight, setStackHeight] = useState(0);
  const [showFriends, setShowFriends] = useState(false);

  const [noFriends, setNoFriends] = useState(true);
  const [attributes, setAttributes] = useState({
 
    "fluffy": false,
    "endangered": false
  });
  // const [doubleChecked, setDoubleChecked] = useState(false)

  function reorderStack() {
    updateFriendsList(sortDefault(friendsList, "height"))
    
  }


  function sortDefault(arr, criterium) {
    var sortedArray = [...arr];
    sortedArray.sort((a, b) => {
      if (a[criterium]>b[criterium]) {
        return 1;
      }
      else if (a[criterium]<b[criterium]) {
        return -1;
      }
      else {
        return 0
      }
      })
    return sortedArray;
    
  }
  function sortAnimals(criterium) {
    const sortedArray = sortDefault(currentAnimals, criterium)
    updateCurrentAnimals(sortedArray);
  }


    
  

  function addToFriends(friend) {
    if (noFriends) {
      setNoFriends(false);
    }
    friend.isFriend = true
    updateFriendsList(sortDefault([...friendsList,friend],currentSort))
    console.log(friendsList)
    setStackHeight(stackHeight+friend.height)
  }
  function removeFromFriends(unfriend) {
    if (showFriends) {
      updateCurrentAnimals(currentAnimals.filter((f)=>f!=unfriend))
    }
    unfriend.isFriend = false;
    if(friendsList.length == 1) {
      setNoFriends(true);
    }
    
    updateFriendsList(friendsList.filter((f)=>f!=unfriend))
    console.log(friendsList)
    setStackHeight(stackHeight-unfriend.height)
  }


  function toggleFriends() {
    if (!showFriends) {
      const copy = [...currentAnimals];
      const filteredArray = copy.filter((a)=>(friendsList.includes(a)))
      updateCurrentAnimals(filteredArray)
      console.log(currentAnimals)
      setShowFriends(true)
      
    }
    else {
      setShowFriends(false)
      var all = [...allAnimals];

      for(const key in attributes){
        if(attributes[key]) {
          all=all.filter((a)=>a[key])
        }
      }

      updateCurrentAnimals(sortDefault(all,currentSort))
    }
  }

  function toggleAttribute(attribute) {
    const original = attribute;
    
    if (!attributes[attribute]) {
      const copy = [...currentAnimals];
      var filteredArray = []
      
      
        filteredArray = copy.filter((a)=>(a[original]))
      
      
      updateCurrentAnimals(filteredArray)
      const oldAttributes = attributes;

     oldAttributes[attribute] = true;

      
      setAttributes(oldAttributes)
    }
    else {
      const oldAttributes = attributes;
      
        oldAttributes[attribute] = false;
      
      
      setAttributes(oldAttributes)
   
      
      var all = [...allAnimals];

      for(const key in attributes){
        if(attributes[key]) {
          
            all=all.filter((a)=>a[key])
          
          
        }
      }
      if(showFriends) {
        all = all.filter((a)=>(friendsList.includes(a)))
      }
      updateCurrentAnimals(sortDefault(all,currentSort))
      
    }
  }

  // Couldn't get this function to work properly - need to trigger animal cards to rerender as well somehow 

  // function removeAll() {
  //   var all = [...allAnimals];
  //   all.forEach(element => {
  //     element.isFriend = false;
  //   });
  //   updateCurrentAnimals(sortDefault(all,currentSort))
  //   updateFriendsList([])
  //   setNoFriends(true)
  //   setShowFriends(false)
  //   setStackHeight(0)
  //   this.forceUpdate()
  // }
 
  

  
  return (
    <div className="App">
      <div>
      <header>
            <h1>
              The Zigzag Zoo 
            </h1>
            <h3 id="subtitle">
              for Silly and Awesome Animals
            </h3>
          </header>
          <div className="menu">
              <h4>Sort:</h4>
              <form>
                <SortOption by="name"  category="sort" label="By Friendly Name &#x28;Alphabetical&#x29;" sortAnimals={sortAnimals} updateCurrentSort={updateCurrentSort} currentSort={currentSort}/>
                <SortOption by="common_name"  category="sort" label="By Common Name &#x28;Alphabetical&#x29;" sortAnimals={sortAnimals} updateCurrentSort={updateCurrentSort} currentSort={currentSort}/>
                <SortOption by="sci_name"  category="sort" label="By Scientific Name &#x28;Alphabetical&#x29;" sortAnimals={sortAnimals} updateCurrentSort={updateCurrentSort} currentSort={currentSort}/>
                <SortOption by="age" category="sort" label="By Age" sortAnimals={sortAnimals} updateCurrentSort={updateCurrentSort} currentSort={currentSort}/>
                <SortOption by="height" category="sort" label="By Height" sortAnimals={sortAnimals} updateCurrentSort={updateCurrentSort} currentSort={currentSort}/>
              </form>
              <h4>Filter:</h4>
              <form>
                <FilterOption by="fluffy"  category="filter" label="Fluffy animals" eventKey="fluffy" toggleAttribute={toggleAttribute}/>
                <FilterOption by="endangered"   category="filter" label="Endangered animals" eventKey="endangered" toggleAttribute={toggleAttribute}/>
                
              </form>
              <form>
                <div className="option">
                  <input type='checkbox' id="bfl" name="bfl" onChange={()=>toggleFriends()}/>
                  <label htmlFor="bfl">Best Friends List</label>
                  
                </div>
              </form>
              {/* Couldn't get this button to work properly - need to trigger animal cards to rerender as well somehow */}
              {/* <button onClick={()=>removeAll()}>remove all</button> */}
              
          </div>
          
          <div className='bestFriends'>
            
            <h3>
              Best Friends:
            </h3>
            {friendsList.map((item, index) => (
              <p key={item.name}><span className='bestieName'>{item.name}</span> the {item.common_name} </p>
            ))}
            
          </div>
      </div>



        <div className='cards'>
          <h2>
            Check out our awesome animals:
          </h2>
          {currentAnimals.map((item, index) => (
            <Animal animal={item} key={item.name} removeFromFriends={removeFromFriends} addToFriends={addToFriends} noFriends={noFriends}/>
          ))}
          {(noFriends && showFriends) ? <p className="noFriends, card">You have no friends yet! Click the heart icon on an animal to befriend it.</p> : null}
          
        </div>
        <div id="friendStackImages">
          {(friendsList.length>1) ? <button onClick={()=>reorderStack()}>Pyramid!</button> : null}
          
          <h2>
            Best Friend Stack:
          </h2>
          <p>
            How tall can you make it?
          </p>
          <p className='stackHeight'>Best Friend Stack Height: <span id="height">{stackHeight} inches</span></p>
          {friendsList.map((item, index) => (
            <img alt={item.name} className="stack" src={`/images/${item.image}`} key={item.name} style={{width: `calc(20px * ${item.height})`, height:`calc(20px * ${item.height})`}}/>
          ))}
        </div>


        
      
    </div>
  );
}

export default App;
