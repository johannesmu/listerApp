import '../styles/Spinner.css'

export function Spinner ( props ) {
  return (
    <div 
    className="spinner" 
    style={ {width: props.size + "px", height: props.size +"px", backgroundColor: props.color, animationDuration: '2s' }}
    >
    </div>
  )
}