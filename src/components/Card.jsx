import React from 'react'
import './Card.css'
import rab from '../right-arrow-button.png'
import { useNavigate } from 'react-router-dom';
const Card = (props) => {
    const navigate = useNavigate();
    const handleonclick = ()=>
    {
        if(props.heading == "License Management")
        {
            navigate('/License Management')
        }
        if(props.heading == "VConnect")
        {
          navigate('/Vconnect')
        }
        if(props.heading == "SOD")
        {
          navigate('/SOD')
        }
        if(props.heading == "User Management")
        {
          navigate('/admin')
        }
        
        
    }
  return (
    <div>
        <div class="card"> 
  
  <div class="header"> 
    <div class="image">
      <img src={props.isrc} className='cclogo'/>
      </div> 
      <div class="content">
         <span class="title">{props.heading}</span> 
         <p class="message">Thank you for your purchase. you package will be delivered within 2 days of your purchase</p> 
         </div> 
         <div class="actions">
            <button class="history" type="button" onClick={handleonclick}>Go</button> 
            
            </div> 
            </div> 
            </div>
    </div>
  )
}

export default Card