import React, { useState, useEffect, useRef } from "react";
import "./Vconnect.css";
import jira from "../atlassian.png";
import oracle from "../oracle.png";
import coupa from "../coupa.png";
import salesforce from "../salesforce-logo-cloudcon.png";
import workday from "../workday.png";
import Aicon from "../Aicon.png";
import view from "../view.png";
import plus from "../plus.png";
import "./Dropdowncomp";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DropdownComponent from "./Dropdowncomp";
import GridTable from '@nadavshaar/react-grid-table';
import cross from '../cross.png';

const Vconnect = () => {
  const [selectedDropdownValues, setSelectedDropdownValues] = useState({});
  const [selectedSDropdownValues, setSelectedSDropdownValues] = useState({});
  const handleSelection = (dropdownId, value) => {
    setSelectedDropdownValues((prevValues) => ({
      ...prevValues,
      [dropdownId]: value,
    }));
  };
  const handleSelections = (dropdownId, value) => {
    setSelectedSDropdownValues((prevValues) => ({
      ...prevValues,
      [dropdownId]: value,
    }));
  };
    const initialItems = [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" },
      { id: 4, name: "Item 4" },
      { id: 5, name: "Item 5" },
      { id: 6, name: "Item 6" },
      { id: 7, name: "Item 7" },
      { id: 8, name: "Item 8" },
      { id: 9, name: "Item 9" },
      { id: 10, name: "Item 10" },
      { id: 11, name: "Item 11" },
      { id: 12, name: "Item 12" },
      { id: 13, name: "Item 13" },
      { id: 14, name: "Item 14" },
      { id: 15, name: "Item 15" },

      // Add more items as needed
    ];
  const [dropdownComponents, setDropdownComponents] = useState([
    {
      id: 1,
      items: initialItems, // assuming initialItems is defined
      dropdownId: "sdropdown1",
      handleSelections: handleSelections,
    },
    {
      id: 2,
      items: initialItems, // assuming initialItems is defined
      dropdownId: "sdropdown2",
      handleSelections: handleSelections,
    },
    // ... Add three more initial DropdownComponent configurations
    {
      id: 3,
      items: initialItems, // assuming initialItems is defined
      dropdownId: "sdropdown3",
      handleSelections: handleSelections,
    },
    {
      id: 4,
      items: initialItems, // assuming initialItems is defined
      dropdownId: "sdropdown4",
      handleSelections: handleSelections,
    },
    {
      id: 5,
      items: initialItems, // assuming initialItems is defined
      dropdownId: "sdropdown5",
      handleSelections: handleSelections,
    },
  ]);
  const [ddropdownComponents, setDDropdownComponents] = useState([
    {
      id: 1,
      items: initialItems, // assuming initialItems is defined
      dropdownId: "dropdown1",
      handleSelection: handleSelection,
    },
    {
      id: 2,
      items: initialItems, // assuming initialItems is defined
      dropdownId: "dropdown2",
      handleSelection: handleSelection,
    },
    // ... Add three more initial DropdownComponent configurations
    {
      id: 3,
      items: initialItems, // assuming initialItems is defined
      dropdownId: "dropdown3",
      handleSelection: handleSelection,
    },
    {
      id: 4,
      items: initialItems, // assuming initialItems is defined
      dropdownId: "dropdown4",
      handleSelection: handleSelection,
    },
    {
      id: 5,
      items: initialItems, // assuming initialItems is defined
      dropdownId: "dropdown5",
      handleSelection: handleSelection,
    },
  ]);
  

  const addNewDDropdownComponent = () => {
 
      
    
      const newDComponent = {
        id: ddropdownComponents.length + 1,
        items: initialItems, // You can pass the necessary props here
        dropdownId: `dropdown${ddropdownComponents.length + 1}`,
        handleSelection: handleSelection,
      };

      setDDropdownComponents([...ddropdownComponents, newDComponent]);
      
  };
  const addNewDropdownComponent = () => {
    
      const newComponent = {
        id: dropdownComponents.length + 1,
        items: initialItems, // You can pass the necessary props here
        dropdownId: `sdropdown${dropdownComponents.length + 1}`,
        handleSelections: handleSelections,
      };

      setDropdownComponents([...dropdownComponents, newComponent]);
      
    
  };
  const addcmpboth = ()=>
  {
    if(source != null && destination != null){
    addNewDDropdownComponent();
    addNewDropdownComponent();
    toast.success("Field Added")
    }
    else
    {
      toast.error("Check Source/Destination")
    }
  }
  const DropdownCell = ({ id, items, dropdownId, handleSelection }) => (
    <DropdownComponent
      key={id}
      items={items}
      dropdownId={dropdownId}
      handleSelection={handleSelection}
    />
  );
  useEffect(() => {
    console.log(selectedDropdownValues);
    console.log(selectedSDropdownValues);
  }, [selectedDropdownValues, selectedSDropdownValues]);
  const [showAdditionalDiv, setShowAdditionalDiv] = useState(false);
  const toggleAdditionalDiv = () => {
    setShowAdditionalDiv(!showAdditionalDiv);
  };
  const [checkedItems, setCheckedItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  // Function to handle checkbox changes
  const handleCheckboxChange = (itemId) => {
    const isChecked = checkedItems.includes(itemId);
    if (!isChecked) {
      // Add the item to the checkedItems array
      setCheckedItems([...checkedItems, itemId]);
    } else {
      // Remove the item from the checkedItems array
      setCheckedItems(checkedItems.filter((id) => id !== itemId));
    }
  };

  const saveCheckedItems = () => {
    const itemsToAdd = checkedItems.map((id) =>
      initialItems.find((item) => item.id === id)
    );
    setSavedItems([...savedItems, ...itemsToAdd]);
    setCheckedItems([]); // Reset the checked items state
    setShowAdditionalDiv(!showAdditionalDiv);
  };
  const logoImages = {
    jira: jira,
    oracle: oracle,
    coupa: coupa,
    workday: workday,
    salesforce: salesforce,
  };

  const [sbox, setsboxdata] = useState({ source: null, destination: null });
  const { source } = sbox;
  const { destination } = sbox;
  function handledragover(event) {
    event.preventDefault();
  }
  function handleondrag(event, logo) {
    event.dataTransfer.setData("logoname", logo);
  }
  function handleondrop(event, boxtype) {
    const lname = event.dataTransfer.getData("logoname");
    if (boxtype === "source") {
      setsboxdata((prevData) => ({
        ...prevData,
        source: lname,
      }));
    }

    if (boxtype === "dest") {
      setsboxdata((prevData) => ({
        ...prevData,
        destination: lname,
      }));
    }
  }
  useEffect(() => {
    console.log(sbox); // Log the updated state whenever sbox changes
  }, [sbox]);
 

  return (
    <div className="vmain">
      <div className="vnav">Vconnect</div>
      <div className="vvnav">
        <div className="logoc">
          <img
            src={jira}
            className="vjlogo"
            draggable={true}
            onDragStart={(e) => handleondrag(e, "jira")}
          />
          <img
            src={oracle}
            className="vjlogo"
            draggable={true}
            onDragStart={(e) => handleondrag(e, "oracle")}
          />
          <img
            src={coupa}
            className="vjlogo"
            draggable={true}
            onDragStart={(e) => handleondrag(e, "coupa")}
          />
          <img
            src={workday}
            className="vjlogo"
            draggable={true}
            onDragStart={(e) => handleondrag(e, "workday")}
          />
          <img
            src={salesforce}
            className="vjlogo"
            draggable={true}
            onDragStart={(e) => handleondrag(e, "salesforce")}
          />
        </div>
        <div className="dragndrop">
          <div className="sourdes">
            <div
              className="sourcebox"
              onDrop={(e) => handleondrop(e, "source")}
              onDragOver={handledragover}
            >
              {source ? (
                <img src={logoImages[source]} className="vjlogo" />
              ) : (
                "Select Source"
              )}
            </div>

            <div
              className="desbox"
              onDragOver={handledragover}
              onDrop={(e) => handleondrop(e, "dest")}
            >
              {destination ? (
                <img src={logoImages[destination]} className="vjlogo" />
              ) : (
                "Select Destination"
              )}
            </div>
          </div>
          <div className="ctrlbtns" style={{display:'flex',gap:'20px'}}>
            <button onClick={addcmpboth} className="fldbtn">
            <img className="pluss" src={plus} /> Add Field
            </button>
            <button  className="rfldbtn">
            <img className="pluss" src={cross} /> Delete Field
            </button>
            </div>
          <div className="sourdesdata">
            <div className="sddmain">
            <div className="sourcefields">
                <table style={{width:'100%'}}>
                  <tr>
                    <th style={{fontWeight:'10'}}>Source Fields</th>
                  </tr>
                  {dropdownComponents.map((component) => (
                    <tr>
                    <div style={{ display: 'flex', alignItems: 'center' ,gap:'8px',width:'100%',backgroundColor:'white',borderBottom: '1px solid black'}}>
                      <input
                        type="checkbox"
                        onChange={(e) => handleCheckboxChange(component.id)}
                        checked={checkedItems.includes(component.id)}
                        style={{ height:'20px' }}
                      />
                      <DropdownComponent
                        key={component.id}
                        items={component.items}
                        dropdownId={component.dropdownId}
                        handleSelections={component.handleSelections}
                        className="ddrrcmp"
                        
                      />
                    </div>
                  </tr>
                  ))}
                </table>
            </div>
              <div className="destfields">
              <table style={{width:'100%' }}>
                  <tr>
                    <th style={{fontWeight:'10'}}>Destination Fields</th>
                  </tr>
                  {ddropdownComponents.map((component) => (
                    <tr>
                    <div style={{ display: 'flex', alignItems: 'center' ,gap:'8px',width:'100%',backgroundColor:'white',borderBottom: '1px solid black'}}>
                      <input
                        type="checkbox"
                        onChange={(e) => handleCheckboxChange(component.id)}
                        checked={checkedItems.includes(component.id)}
                        style={{ height:'20px' }}
                      />
                      <DropdownComponent
                        key={component.id}
                        items={component.items}
                        dropdownId={component.dropdownId}
                        handleSelection={component.handleSelection}
                        className="ddrrcmp"
                        
                      />
                    </div>
                  </tr>
                  ))}
                </table>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vconnect;
