import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import Ascreen from './components/Ascreen';
import Configure from './components/Configure';
function App() {
  const divStyle = {
    width: '100%', 
    height: '100%',
  };
  return (
   <div className='main'>
    <Router>
      <Routes>
      <Route path="/" element={<div className='main' style={divStyle}><Navbar/><Homepage/></div>} />
      <Route path="/ascreen" element={<Ascreen/>} />
      <Route path="/configure" element={<Configure/>}/>
      </Routes>
    </Router>
   </div>
  );
}

export default App;
