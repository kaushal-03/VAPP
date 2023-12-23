import React, { useState } from 'react';
import './Dropdowncomp.css';
function DropdownComponent({ items,dropdownId,value,handleSelection,handleSelections  }) {
  const [selectedValue, setSelectedValue] = useState('');
  const handleDropdownChange = (event) => {
    const value = event.target.value;
    setSelectedValue(event.target.value);
    let fchar = dropdownId.charAt(0);
    if(fchar === 's'){handleSelections(dropdownId, event.target.value);}
    else{
    handleSelection(dropdownId, event.target.value);}
  };

  return (
    <div className='dddwn'>
      <div className='cdwn'>
      <select value={selectedValue} onChange={handleDropdownChange} className='dropdowncmp'>
        <option value="" >Select The Field</option>
        {items.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      </div>
    </div>
  );
}

export default DropdownComponent;
