import React from 'react'
import './Cardd.css'


const Cardd = (props) => {
  return (
    <div class="cardd">
  <img className="cimg"src={props.name}/>
  <button className='arbtn'>></button>
  
  </div>
  )
}

export default Cardd