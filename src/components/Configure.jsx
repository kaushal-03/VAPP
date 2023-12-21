import React from 'react';
import './Configure.css';
import oracle from '../oracle.png';
import coupa from '../coupa.png';
import salesforce from '../salesforce-logo-cloudcon.png';
import jira from '../atlassian.png';
import workday from '../workday.png';
import tick from '../tick.png';
import wrong from '../wrong.png'
const Configure = () => {
  return (
    <div className='configmain'>
      <div className='confignav'>Configure</div>
      <div className='configcard'>
        <div><label>No of users in the Organization:</label><input type='text'></input></div>
        <div className='inlo'><label>No of Licenses in <img src={oracle} className='liclog'/>:</label><input type='text'></input></div>
        <div className='inlo'><label>No of Licenses in <img src={coupa} className='liclog'/>:</label><input type='text'></input></div>
        <div className='inlo'><label>No of Licenses in <img src={salesforce} className='liclog'/>:</label><input type='text'></input></div>
        <div className='inlo'><label>No of Licenses in <img src={workday} className='liclog'/>:</label><input type='text'></input></div>
        <div className='inlo'><label>No of Licenses in <img src={jira} className='liclog'/>:</label><input type='text'></input></div>
        <div className='configdn'><button className='button-68'><img src={tick} className='confimg'/>Submit</button><button className='button-44'><img src={wrong} className='confimg'/>Cancel</button></div>
      </div>
    </div>
      );
};

export default Configure;
