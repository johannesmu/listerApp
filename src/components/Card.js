import { Link } from "react-router-dom"
import { Image } from "./Image"
import '../styles/Card.css'

export function Card ( props ) {
  return (
    <div className={"card "+ props.class }>
     <Image source="https://picsum.photos/seed/picsum/600/600" />
      <div className="card-body">
        <h4>{ props.heading }</h4>
        <p>{ props.content}</p>
      </div>
      <Link to={props.link} className="card-link"></Link>
    </div>
  )
}