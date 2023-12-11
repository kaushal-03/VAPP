import React from 'react'
import './Card.css'
import rab from '../right-arrow-button.png'
const Card = (props) => {
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
            <button class="history" type="button">Go</button> 
            
            </div> 
            </div> 
            </div>
    </div>
  )
}

export default Card