import { Routes, Route, Link } from 'react-router-dom'

import {Home} from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

import logoimg from './assets/Logo-purple-star.svg'
import { Header } from './components/Header'
import { Search } from './components/Search';

import { Nav } from './components/Nav';
import { Logo } from './components/Logo'

const MainNavItems = [
  { "name": "Home", "route": "/", "comp": "Home" },
  { "name": "About", "route": "/about", "comp": "About" },
  { "name": "Contact", "route": "/contact", "comp": "Contact" },
]

const DataSource = "https://jsonplaceholder.typicode.com/posts"

function App() {
  return (
    <div className="App">
      <Header 
      logo={ <Logo tag="Lister" image={logoimg} size={60} url={"/"} /> } 
      name="main"  
      nav={<Nav items={MainNavItems} navClass="main-nav" />} 
      search={<Search id="nav" />}
      />
      <Routes>
        <Route path="/" element={<Home data={ DataSource } />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
