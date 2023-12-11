import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import Ascreen from './components/Ascreen';
import Configure from './components/Configure';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dnavbar from './components/Dnavbar';
import Alogin from './components/Alogin';
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
      <Route path="/login" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/authpage" element={<div className='main' style={divStyle}><Dnavbar/><Alogin/></div>}/>
      </Routes>
    </Router>
   </div>
  );
}

export default App;
