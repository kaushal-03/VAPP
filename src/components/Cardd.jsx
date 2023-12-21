import React from 'react'
import './Cardd.css'
import { useNavigate } from 'react-router-dom';

const Cardd = (props) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/Ascreen');
  };

  return (
    <div class="cardd">
  <img className="cimg"src={props.name}/>
  <button className='arbtn' onClick={handleButtonClick}>></button>
  
  </div>
  )
}

export default Cardd