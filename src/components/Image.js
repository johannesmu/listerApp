import { useState } from "react";
import { Spinner } from "./Spinner";
export function Image(props) {
  const [src, setSrc] = useState()

  useState( () => {
    if( props.source ) {
      fetch( props.source )
        .then( (res) => res.blob() )
        .then( (dataBlob) => {
          const objURL = URL.createObjectURL( dataBlob )
          setSrc( objURL )
        }) 
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
    return <Spinner color="red" size="60" />
  }
  else {
    return <img src={src} alt="placeholder" style={{ maxWidth: '100%'}}/>
  }
}