import './App.css';
import Home from './components/Home';
import Login  from './components/Login';
import Signup from './components/Signup';
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
