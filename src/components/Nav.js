import '../styles/Nav.css'
import { useEffect, useState } from 'react'

export function Nav(props) {
  const [navItems, setNavItems] = useState([])

  useEffect(() => {
    if (props.items) {
      setNavItems(props.items)
    }
    else {

    }
  })

  const NavContents = navItems.map((item, key) => {
    return (
      <a href={item.route} key={key}>{item.name}</a>
    )
  })

  return (
    <nav className={"nav " + props.navClass} >
      {NavContents}
    </nav>
  )
}