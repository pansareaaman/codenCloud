import './App.css';
import Html from './component/Html'
import Css from './component/Css'
import Js from './component/Js'
import C from './component/C'
import Cpp from './component/Cpp'
import Java from './component/Java'
import Python from './component/Python'
import Php from './component/Php'
import Node from './component/Node'
import Home from './component/Home'
import ReactInfo from './component/ReactInfo'
import {Footer} from './component/Footer'
import { Route ,Routes } from 'react-router-dom';
import { Navbar } from './component/Navbar';
import Course from './component/Course'
function App() {
  return (
    <div className="App">
        {/* <Navbar/> */}
        
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
          <Route path='/course' element={<Course/>}></Route>
          <Route path='/node' element={<Node/>}></Route>
          
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
