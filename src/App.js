import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Detail } from './pages/Detail'

import logoimg from './assets/Logo-purple-star.svg'
import { Header } from './components/Header'
import { Search } from './components/Search';
import { Footer } from './components/Footer'

import { Nav } from './components/Nav';
import { Logo } from './components/Logo'

import './styles/App.css'

const MainNavItems = [
  { "name": "Home", "route": "/", "title": "Home" },
  { "name": "Signup", "route": "/signup", "title": "Signup" },
  { "name": "Signin", "route": "/signin", "title": "Signin" },
]

const FooterNavItems = [
  { "name": "About", "route": "/about", "title": "About" },
  { "name": "Contact", "route": "/contact", "title": "Contact" },
]

const DataSource = "https://jsonplaceholder.typicode.com/posts"

function App() {
  const searchHandler = ( evt ) => {
    evt.preventDefault()
  }

  return (
    <div className="App">
      <Header
        logo={<Logo tag="Listed" image={logoimg} size={60} url={"/"} />}
        name="main"
        nav={<Nav items={MainNavItems} navClass="main-nav" />}
        search={<Search id="nav-search" action={searchHandler} />}
      />
      <main className='content'>
        <Routes>
          <Route path="/" element={<Home data={DataSource} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:itemId" element={<Detail />} />
        </Routes>
      </main>
      <Footer nav={<Nav items={FooterNavItems} navClass="footer-nav" />} />
    </div>
  );
}

export default App;
