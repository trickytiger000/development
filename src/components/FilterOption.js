

export default function FilterOption(props) {
    


    return (
      <div className="option">
        <input className="input" type="checkbox" id={`${props.by}${props.not}`} name={props.category} onClick={()=>props.toggleAttribute(props.by, props.not)}/>
        <label htmlFor={`${props.by}${props.not}`}>{props.label}</label>
      </div>
    );
  }
