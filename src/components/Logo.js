import '../styles/Logo.css'
import { Link } from 'react-router-dom'

export function Logo(props) {
  if (props.url) {
    return (
      <Link className="logo" to={ props.url }>
        <img className="logo-img" src={props.image} alt={props.tag} />
        <h1 className="logo-tag">{props.tag}</h1>
      </Link>
    )
  }
  else {
    return (
      <div className="logo">
        <img className="logo-img" src={props.image} alt={props.tag} />
        <h1 className="logo-tag">{props.tag}</h1>
      </div>
    )
  }
}