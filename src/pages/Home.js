import {useState,useEffect} from 'react'
export function Home( props ) {
  const[pageData, setPageData ] = useState()
  let layOut = "no items"

  useEffect( () => {
    if( !pageData ) {
      fetch( props.data )
      .then( (res) => res.json() )
      .then( (jsondata) => setPageData(jsondata) )
    }
  })

  useEffect( () => {
    if( pageData ) {
      layOut = pageData.map( (item, key ) => {
        return (
          <div className="card">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        )
      })
    }
    else {
      
    }
  },[pageData])

  return (
    <div className="home">
      <h1>Home</h1>
      <main className="content">
        {layOut}
      </main>
    </div>
  )
}