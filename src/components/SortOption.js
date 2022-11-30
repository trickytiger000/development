

export default function SortOption(props) {
  

    return (
      <div className="option">
        <input className="input" type="radio" id={props.by} name={props.category} onChange={()=>{props.sortAnimals(props.by); props.updateCurrentSort(props.by)}} checked={props.currentSort==props.by}/>
        <label htmlFor={props.by}>{props.label}</label>
      </div>
    );
  }
