import logo from './logo.svg';
import { Header } from './components/Header'
import { Nav  } from './components/Nav';

const MainNavItems = [
  {"name" : "Home", "route" : "/", "comp" : "Home"},
  {"name" : "About", "route" : "/about", "comp" : "About"},
  {"name" : "Contact", "route" : "/contact", "comp" : "Contact"},
]

function App() {
  return (
    <div className="App">
      <Header name="main" siteName="lister" nav={ <Nav items={MainNavItems} navClass="main-nav" /> } />
    </div>
  );
}

export default App;
