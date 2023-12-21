import React from 'react'
import './Licensetab.css'
import Cardd from './Cardd'
import oracle from '../oracle.png';
import coupa from '../coupa.png';
import salesforce from '../salesforce-logo-cloudcon.png';
import jira from '../atlassian.png';
import workday from '../workday.png';
import gear from '../gear.png';
import { useNavigate } from 'react-router-dom';
const Licensetab = () => {
    const navigate = useNavigate();
  return (
    <div>
    <div className='nnav'>
    <h1 className='hh1'>Welcome To License Management.</h1>
    <button className='bellbtn' onClick={() => navigate('/configure')}><img src={gear} className='bell'/></button>
    </div>
    <div className='limain'>
        <div>
            <Cardd name={oracle}/>
        </div>
        <div>
            <Cardd name={coupa}/>
        </div>
        <div>
            <Cardd name={salesforce}/>
        </div>
        <div>
            <Cardd name={workday}/>
        </div>
        <div>
            <Cardd name={jira}/>
        </div>
    </div>
    </div>
  )
}

export default Licensetab