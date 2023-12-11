import React from 'react';
import './Sidebar.css';
import oracle from '../oracle.png';
import coupa from '../coupa.png';
import salesforce from '../salesforce-logo-cloudcon.png';
import jira from '../atlassian.png';
import workday from '../workday.png';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate("/ascreen")
  };
  return (
    <div className='Mainside'>
        <button className='btn'><img src={oracle} className='logo'/></button>
        <button className='btn'><img src={coupa} className='logo'/></button>
        <button className='btn' onClick={handleButtonClick}>
      <img src={jira} className='logo' alt="Jira Logo" />
    </button>
        <button className='btn'><img src={salesforce} className='logo'/></button>
        <button className='btn'><img src={workday} className='logo'/></button>
    </div>
  )
}

export default Sidebar