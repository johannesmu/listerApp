import { useParams } from "react-router-dom"

export function Detail( props ) {
  let params = useParams()
  return (
    <div className="detail">
      <h1>Detail {params.itemId}</h1>
    </div>
  )
}