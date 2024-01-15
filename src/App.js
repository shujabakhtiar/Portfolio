import './assets/styles/App.css';
import {Navbar} from "./containers/Navbar.jsx"
import {Home} from "./pages/Home.jsx"
function App() {
  return (
    <div className="App">
      <div className='body'>
      <Navbar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
