import '../styles/Home.css'
import {useState,useEffect} from 'react'

import { Card } from '../components/Card'

export function Home( props ) {
  const[ pageData, setPageData ] = useState([])

  // set site name
  document.title = "Welcome to Listd"
  
  useEffect( () => {
    if( pageData.length === 0 ) {
      fetch( props.data )
      .then( (res) => res.json() )
      .then( (jsondata) => {
        setPageData(jsondata)
      } )
    }
  })

  if( pageData.length > 0) {
    const Items = pageData.map( (item, key ) => {
      return (
      <Card 
        key={key}
        image="https://picsum.photos/seed/picsum/450/300"
        heading={item.title}
        content={item.title}
        id={item.id}
        link="#"
       />
      )
    })

    return (
      <div className="home">
        
        <main className="content">
         {Items}
        </main>
      </div>
    )
  }
  else {
    return (
      <p>no data</p>
    )
  }
 
}