import React from 'react';
import './Configure.css';

const Configure = () => {
  return (
    <div className="parent">
    <div className="configureForm">
      <div className='form-ggroup'>
      <label htmlFor="dropdown">Select the Application:</label>
      <select id="dropdown">
        <option value="">Select an option</option>
        <option value="option1">Jira</option>
        <option value="option2">Workday</option>
        <option value="option3">Netsuite</option>
        <option value="option4">Salesforce</option>
        <option value="option5">Coupa</option>
      </select>
      </div>
      <div className='form-ggroup'>
      <label htmlFor="numberInputUsers">No of users in the Organization:</label>
      <input id="numberInputUsers" type="number" />
      </div>
      <div className='form-ggroup'>
      <label htmlFor="numberInputLicenses">No of Licenses:</label>
      <input id="numberInputLicenses" type="number" />
      </div>  
      <div className='btnss'>
        <button className='button-3a'>Submit</button>
        <button className='button-4'>Cancel</button>
      </div>
    </div>
    </div>
  );
};

export default Configure;
