import './App.css';
import Body from './body/body.js'
import image from './img/3d-render-abstract-particle-design.jpg'

import Nav from './component/nav.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Particlesbg from './body/Particles';

function App() {
  return (
    <>
    <div className="App "  style={{minHeight:'100vh'}}>
    <Particlesbg/>
    <BrowserRouter>
    <div style={{zIndex:'2'}}>
        <Nav/>
        <Routes>
          <Route path='/Joshua_Sibanda/' element={<Body/>}/>
        </Routes>
    </div>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
