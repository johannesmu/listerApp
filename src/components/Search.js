import '../styles/Search.css'
import { useState, useEffect} from 'react'

export function Search ( props ) {
  const [inputLength,setInputLength] = useState(0)
  
  const changeHandler = ( evt ) => {
    setInputLength( evt.target.value.length )
  }

  return (
    <form id={ props.id } role="search" method={props.method} onSubmit={props.action} className="search-form">
      <div className="wrap">
        <label htmlFor={ props.id + "-input" } className="search-label">Search form</label>
        <input type="search" name="query" id={ props.id + "-input"} className="search-input" onChange={changeHandler} />
        <button type="reset" className='reset' style={{ display: (inputLength == 0 ) ? "none" : "block"}}>&times;</button>
      </div>
      <button type="submit" handler={ props.handler } className="submit">Search</button>
    </form>
  )
}