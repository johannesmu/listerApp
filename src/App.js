import logo from './logo.svg';
import { Header } from './components/Header'
import { Nav  } from './components/Nav';

const NavItems = [
  {"name" : "Home", "route" : "/"},
  {"name" : "About", "route" : "/about"}
]

function App() {
  return (
    <div className="App">
      <Header name="main" siteName="lister" nav={ <Nav items={NavItems} navClass="main-nav" /> } />
    </div>
  );
}

export default App;
