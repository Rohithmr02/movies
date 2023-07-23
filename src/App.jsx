
import './App.css';
import Main from './component/Main';
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import Movieinfo from './component/Movieinfo';
import Home from './component/Home';
import Signup from './component/Signup';
import Login from './component/Login';


function App() {

  return(
    <Router>
      <Routes>
         <Route path='/' element={<Home/>}></Route>
        <Route path='/Main' element={<Main/>}></Route>
        <Route path='/:idd' element={<Movieinfo/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      
      </Routes>
    </Router>
  )
}

export default App;
