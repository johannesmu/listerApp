import logoimg from './assets/Logo-purple-star.svg'
import { Header } from './components/Header'
import { Nav } from './components/Nav';
import { Logo } from './components/Logo'

const MainNavItems = [
  { "name": "Home", "route": "/", "comp": "Home" },
  { "name": "About", "route": "/about", "comp": "About" },
  { "name": "Contact", "route": "/contact", "comp": "Contact" },
]

function App() {
  return (
    <div className="App">
      <Header logo={ <Logo tag="Lister" image={logoimg} size={100} url={"/"} /> } name="main"  nav={<Nav items={MainNavItems} navClass="main-nav" />} />
    </div>
  );
}

export default App;
