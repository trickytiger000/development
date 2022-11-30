import './Animal.css'
import '../App.css';
import { useState } from "react";


export default function Animal(props) {
  const [heartState, updateHeartState] = useState(checkFriendHeart);
  const [heartText, updateHeartText] = useState(checkFriendText);

  function checkFriendHeart () {
    if (props.animal.isfriend) {
      return "cards-heart.svg";
    }
    else {
      return "cards-heart-outline.svg";
    }
  }
  function checkFriendText () {
    if (props.animal.isfriend) {
      return "Added to best friends list!";
    }
    else {
      return "Add to best friends list?";
    }
  }
function toggleHeart() {
  if (heartState == "cards-heart-outline.svg") {
    updateHeartState("cards-heart.svg")
    updateHeartText("Added to best friends list!")
    props.addToFriends(props.animal)
    props.animal.isfriend = true;
  }
  else {
    updateHeartState("cards-heart-outline.svg")
    updateHeartText("Add to best friends list?")
    props.removeFromFriends(props.animal)
    props.animal.isfriend = false;
  }
}

    return (
      <div className="card">
        <div className="info">
            <h2>{props.animal.name}</h2>
          <div className="statChart">
            <h3>The {props.animal.common_name}</h3>
            <p>AKA <i>{props.animal.sci_name}</i></p>
            
            <p>Age: {props.animal.age} years</p>
            <p>Height: {props.animal.height} inches</p>
          </div>
          <div className='friendButton'>
            <img className="heart" src={`/images/${heartState}`} onClick={()=>toggleHeart()}/>
            <p>{heartText}</p>
          </div>
        </div>
        <div className="image_stuff">

            <img src={`/images/${props.animal.image}`} className="animal_image" alt={props.animal.name + " the " + props.animal.common_name}/>
            <div className="traits">
              {props.animal.endangered ? <p className="endangered">Endangered!</p> : null}
              {props.animal.fluffy ? <p className="fluffy">Fluffy!</p> : null}
            </div>
            
        </div>
        
      </div>
    );
  }
