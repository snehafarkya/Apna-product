import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Opensource from './components/Opensource';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Home/>
      <Opensource/>
      <Team />
      <Contact />
    </div>
  );
}

export default App;
