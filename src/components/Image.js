import { useState, useEffect } from "react";
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

  if (!src) {
    return (
      <div style={{display:"grid",placeItems:"center",width:"100%",aspectRatio:"1/1"}}>
        <Spinner color="black" size="20" />
      </div>
    )
  }
  else {
    return <img src={src} style={{ maxWidth: '100%'}}/>
  }
}