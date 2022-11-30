

export default function FilterOption(props) {
  

    return (
      <div className="option">
        <input className="input" type="checkbox" id={props.by} name={props.category} onClick={()=>props.toggleAttribute(props.by)}/>
        <label htmlFor={props.by}>{props.label}</label>
      </div>
    );
  }
