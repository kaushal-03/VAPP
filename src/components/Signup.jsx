import React from 'react';
import './Signup.css'
import signup from '../signup.png'
const Signup = () => {
  return (
    <div className='iumaidiv1'>
   <img src={signup} className='simg'/>
		<form className='formu' action="#">
			<h1 className='h1iu'>Create Your Account</h1>
			<div class="social-container">
				You are one step ahead to VAPP!!
			</div>
            <input className='inputiu' type="text" placeholder="Name" />
			<input className='inputiu' type="email" placeholder="Email" />
			<input className='inputiu' type="password" placeholder="Password" />
			<input className='inputiu' type="password" placeholder="Re-enter Password" />
			<button className='buttoniu'>Sign Up</button>
		</form>
	
</div>
  )
}

export default Signup