import './Animal.css'
import '../App.css';
import { useState } from "react";

import filledHeart from "../assets/images/cards-heart.svg"
import emptyHeart from "../assets/images/cards-heart-outline.svg"


export default function Animal(props) {
  const [heartState, updateHeartState] = useState(checkFriendHeart);
  const [heartText, updateHeartText] = useState(checkFriendText);




  function checkFriendHeart () {
    if (props.animal.isfriend) {
      return filledHeart;
    }
    else {
      return emptyHeart;
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
  if (heartState == emptyHeart) {
    updateHeartState(filledHeart)
    updateHeartText("Added to best friends list!")
    props.addToFriends(props.animal)
    props.animal.isfriend = true;
  }
  else {
    updateHeartState(emptyHeart)
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
            <img alt="heart" className="heart" src={heartState} onClick={()=>toggleHeart()}/>
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
