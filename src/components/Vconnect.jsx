import React, { useState, useEffect, useRef } from "react";
import "./Vconnect.css";
import jira from "../atlassian.png";
import oracle from "../oracle.png";
import coupa from "../coupa.png";
import salesforce from "../salesforce-logo-cloudcon.png";
import workday from "../workday.png";
import Aicon from "../Aicon.png";
import view from "../view.png";
import './Dropdowncomp';
import DropdownComponent from "./Dropdowncomp";
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
  useEffect(() => {
  console.log(selectedDropdownValues)
  console.log(selectedSDropdownValues)
  }, [selectedDropdownValues,selectedSDropdownValues]);
  const [showAdditionalDiv, setShowAdditionalDiv] = useState(false);
  const toggleAdditionalDiv = () => {
    setShowAdditionalDiv(!showAdditionalDiv);
  };
  const [checkedItems, setCheckedItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
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
            <div className="sourboxextn">
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
              <button className="viewfields" onClick={toggleAdditionalDiv}>
                <img className="eye" src={view} alt="View" />
              </button>
            </div>
            <div className="desboxextn">
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
              <button className="viewfields" onClick={toggleAdditionalDiv}>
                <img className="eye" src={view} alt="View" />
              </button>
            </div>
          </div>
          <div className="sourdesdata">
            <div className="sddmain">
              <div className="sourcefields">
                <table className="sourcefieldtable">
                  <th>Source Fields</th>
                  <tr>
                    <td>
                      <DropdownComponent items={initialItems} dropdownId="sdropdown1" handleSelections={handleSelections}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <DropdownComponent items={initialItems} dropdownId="sdropdown2" handleSelections={handleSelections}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <DropdownComponent items={initialItems} dropdownId="sdropdown3" handleSelections={handleSelections}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <DropdownComponent items={initialItems} dropdownId="sdropdown4" handleSelections={handleSelections}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <DropdownComponent items={initialItems} dropdownId="sdropdown5" handleSelections={handleSelections}/>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="destfields">
                <table className="destfieldtable">
                  <th>Destination Fields</th>
                  <tr>
                    <td>
                      <DropdownComponent items={initialItems} dropdownId="dropdown1" handleSelection={handleSelection}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <DropdownComponent items={initialItems} dropdownId="dropdown2" handleSelection={handleSelection}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <DropdownComponent items={initialItems} dropdownId="dropdown3" handleSelection={handleSelection}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <DropdownComponent items={initialItems} dropdownId="dropdown4" handleSelection={handleSelection}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <DropdownComponent items={initialItems} dropdownId="dropdown5" handleSelection={handleSelection}/>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="btnsds"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vconnect;
