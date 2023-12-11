import React from 'react';
import login from '../login.png'
import { useNavigate } from 'react-router-dom';
import './Signin.css'
const Signin = () => {
	const navigate = useNavigate();
  return (
    
        <div className='iumaidiv'>
		<img src={login} className='limg'/>
		<form className='form2' action="#">
			<h1 className='h1iu'>Sign in</h1>
			<div class="social-container">
				Welcome Back
			</div>
			<input className='inputiu' type="email" placeholder="Email" />
			<input className='inputiu' type="password" placeholder="Password" />
			<a className='aiu' href="#">Forgot your password?</a>
			<button className='buttoniu' onClick={() => navigate('/authpage')}>Sign In</button>
		</form>
	</div>
    
  )
}

export default Signin