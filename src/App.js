import './App.css';
import {Header} from './component/Header'
import Html from './component/Html'
import Css from './component/Css'
import Js from './component/Js'
import C from './component/C'
import Cpp from './component/Cpp'
import Java from './component/Java'
import Python from './component/Python'
import Php from './component/Php'
import Home from './component/Home'
import ReactInfo from './component/ReactInfo'
import { Route ,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/html' element={<Html/>}></Route>
          <Route path='/css' element={<Css/>}></Route>
          <Route path='/js' element={<Js/>}></Route>
          <Route path='/c' element={<C/>}></Route>
          <Route path='/cpp' element={<Cpp/>}></Route>
          <Route path='/java' element={<Java/>}></Route>
          <Route path='/python' element={<Python/>}></Route>
          <Route path='/php' element={<Php/>}></Route>
          <Route path='/reactjs' element={<ReactInfo/>}></Route>
        </Routes>
        
    </div>
  );
}

export default App;
