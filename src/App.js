
import { Routes, Route } from 'react-router-dom';
import './bootstrap.min (4).css'
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import School from './components/School';
import Addeatry from './screens/Addeatery';
import Addschool from './screens/Addschool';
import Addcommercial from './screens/Addcommercial';
import Addhospital from './screens/Addhospital';
import Addhotel from './screens/Addhotel';
import About from './screens/About';
import Eatry from './components/Eatry';
import Hospital from './components/Hospital';
import Hotel from './components/Hotel';
import Commercialproperty from './components/Commercialproperty'



function App() {
  return (
    <div>
    
    
    <Routes>
       <Route path="/home" element={<Home/>}/>
       <Route path="/" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/About" element={<About/>}/>
       <Route path="/school" element={<School/>}/>
       <Route path="/addeatery" element={<Addeatry/>}/>
       <Route path="/addschool" element={<Addschool/>}/>
       <Route path="/Addhotel" element={<Addhotel/>}/>
       <Route path="/addcommercial" element={<Addcommercial/>}/>
       <Route path="/addhospital" element={<Addhospital/>}/>
       <Route path="/Hotel" element={<Hotel/>}/>
       <Route path="/Hospital" element={<Hospital/>}/>
       <Route path="/commercialproperty" element={<Commercialproperty/>}/>
       <Route path="/Eatry" element={<Eatry/>}/>
   
    </Routes>
   
      
    </div>
  );
}

export default App;
