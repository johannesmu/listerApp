import '../styles/Header.css'

export function Header(props) {
  return (
    <header className={props.name + "-header header"}>
     { props.logo }
      {props.nav}
    </header>
  )
}