import { useState } from "react";
import { Spinner } from "./Spinner";
export function Image(props) {
  const [src, setSrc] = useState()
  const [error,setError] = useState()

  useEffect( () => {
    if( props.source && !props.lazy ) {
      fetch( props.source )
        .then( (res) => res.blob() )
        .then( (dataBlob) => {
          const objURL = URL.createObjectURL( dataBlob )
          console.log( objURL )
          //setSrc( objURL )
        })
        .catch((error) => setError(error) )
    }
  }, [props.source])

  const options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
  }

  const observer = new IntersectionObserver(() => {console.log('observed')}, options)

  let target = document.querySelector('#listItem')
  observer.observe(target)

  if (!src) {
    return (
      <div style={{display:"grid",placeItems:"center",width:"100%",aspectRatio:"1/1"}}>
        <Spinner color="black" size="20" />
      </div>
    )
  }
  else {
    return <img src={src} alt="placeholder" style={{ maxWidth: '100%'}}/>
  }
}