import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './component/Signin';
import Signup from './component/Signup';
// import Styledcomponentsexample from './component/Styledcomponentsexample'
import Home from '../src/component/Home'
import Dashboard from './component/Dashboard';



const App = ()=>{
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
