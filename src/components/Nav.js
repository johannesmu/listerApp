import '../styles/Nav.css'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export function Nav(props) {
  const [navItems, setNavItems] = useState([])

  useEffect(() => {
    if (props.items) {
      setNavItems(props.items)
    }
  }, [props.items])

  let loc = useLocation()

  useEffect( () => {
    console.log( loc )
  }, [loc.key] )

  const NavContents = navItems.map((item, key) => {
    return (
      <NavLink exact to={item.route} key={key} activeClassName="active">{item.name}</NavLink>
    )
  })

  return (
    <nav className={"nav " + props.navClass} >
      {NavContents}
    </nav>
  )
}