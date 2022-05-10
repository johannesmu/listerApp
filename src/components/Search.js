export function Search ( props ) {
  return (
    <form id={ props.id } role="search" method={props.method} action={props.handler} >
      <input type="search" name="search-query" id={ props.id + "-input"} />
      
    </form>
  )
}