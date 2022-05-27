import { useState, useEffect } from "react";
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

  if (!src) {
    return <Spinner color="red" size="60" />
  }
  else {
    return <img src={src} style={{ maxWidth: '100%'}}/>
  }
}