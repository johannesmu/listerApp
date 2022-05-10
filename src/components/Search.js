import '../styles/Search.css'

export function Search ( props ) {
  return (
    <form id={ props.id } role="search" method={props.method} action={props.action} className="search-form">
      <label htmlFor={ props.id + "-input" } className="search-label">Search form</label>
      <input type="search" name="query" id={ props.id + "-input"} className="search-input" />
      <button type="submit" handler={ props.handler }>Search</button>
    </form>
  )
}