export function Card ( props ) {
  return (
    <div className={"card "+ props.class }>
      <img src={ props.image } alt={ props.alt } />
      <div className="card-body">
        <h4>{ props.heading }</h4>
        <p>{ props.content}</p>
      </div>
      <a href={props.link} className="card-link"></a>
    </div>
  )
}