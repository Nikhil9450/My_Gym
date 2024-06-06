import {Route,Routes} from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About';
import Services from './Components/Pages/Services';
import Dashboard from './Components/Pages/Dashboard';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Navbar/Navbar';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
        <Route path='*' element={<Navigate to="/" />} />
        <Route path="/" element={<Dashboard/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Contact" element={<Contact/>} />
    </Routes>
    </div>
  );
}

export default App;
