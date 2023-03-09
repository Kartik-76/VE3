
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Modules from './routes/Modules';
import {BrowserRouter,  Routes, Route } from 'react-router-dom';
import ModuleOne from './components/Module_one';
import ModuleTwo from './components/Module_two';
import ModuleThree from './components/Module_three';
import ModuleFour from './components/Module_four';
import ModuleFive from './components/Module_five';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path = "/" element={<Home/>}/>
      <Route exact path = "/modules" element={<Modules/>}/>
      <Route exact path = "/about" element={<About/>}/>
      <Route exact path = "/modules/module_one" element={<ModuleOne/>}/>
      <Route exact path = "/modules/module_two" element={<ModuleTwo/>}/>
      <Route exact path = "/modules/module_three" element={<ModuleThree/>}/>
      <Route exact path = "/modules/module_four" element={<ModuleFour/>}/>
      <Route exact path = "/modules/module_five" element={<ModuleFive/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
