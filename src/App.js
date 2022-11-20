//import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Registrarme } from './components/Registrarme';
import { Login1 } from './components/Login1';
import { Ordenes } from './components/Ordenes';
import { RegOrdenes } from './components/RegOrdenes';
import { Lista} from './components/Lista';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          
          
          <Route exact path="/registrarme" element={<Registrarme/>}/>
          <Route exact path="/login" element={<Login1/>}/>
          <Route exact path="/ordenes" element={<Ordenes/>}/>
          <Route exact path="/ordenes1" element={<RegOrdenes/>}/>
          <Route exact path="/lista" element={<Lista/>}/>

         
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
