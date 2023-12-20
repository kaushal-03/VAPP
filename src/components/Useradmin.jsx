import React from 'react'
import ExpandCollapse from './ExpandCollapse'
import './Useradmin.css'
const Useradmin = () => {
  return (
    <div className='mmm'>
    <div className="vnav">UserAdmin</div>
    <div className='mainuser'>
      <ExpandCollapse/>
    </div>
    </div>
  )
}

export default Useradmin