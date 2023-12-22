import React, { useState } from 'react';

function DropdownComponent({ items,dropdownId,value,handleSelection,handleSelections }) {
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
    <div>
      <select value={selectedValue} onChange={handleDropdownChange}>
        <option value="">Select an option</option>
        {items.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
     
    </div>
  );
}

export default DropdownComponent;
