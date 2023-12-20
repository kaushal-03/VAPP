import React, { useState, useEffect, useRef } from "react";
import "./Vconnect.css";
import jira from "../atlassian.png";
import oracle from "../oracle.png";
import coupa from "../coupa.png";
import salesforce from "../salesforce-logo-cloudcon.png";
import workday from "../workday.png";
import Aicon from "../Aicon.png";
import view from "../view.png";
const Vconnect = () => {

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
    { id: 4, name: "Item 1" },
    { id: 5, name: "Item 2" },
    { id: 6, name: "Item 3" },
    { id: 7, name: "Item 1" },
    { id: 8, name: "Item 2" },
    { id: 9, name: "Item 3" },
    { id: 10, name: "Item 1" },
    { id: 11, name: "Item 2" },
    { id: 12, name: "Item 3" },
    { id: 13, name: "Item 1" },
    { id:14, name: "Item 2" },
    { id: 15, name: "Item 3" },

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
            {savedItems.map((item, index) => (
  <div
    key={item.id}
    style={{
      paddingLeft: '20px',
      fontWeight: 'bold',
      backgroundColor: index % 2 === 0 ? 'lightgray' : 'white',
      height:'30px'
    }}
  >
    {item.name}
  </div>
))}
            </div>
              <div className="destfields">

              </div>
              </div>
              <div className="btnsds">

              </div>
          </div>
        </div>
      </div>
      {showAdditionalDiv && (
        <div className="additional-div">
          <div className="navbarhead">Fields Data</div>
          <div className="datadiv">
            <ul className="ull" style={{ listStyleType: "none", padding: 0 }}>
              {initialItems.map((item) => (
                <div
                  className="dataa"
                  style={{
                    backgroundColor: item.id % 2 === 0 ? "white" : "#F2F1EB",
                  }}
                >
                  <div>
                    <li
                      key={item.id}
                      style={{ fontSize: "18px", marginBottom: "10px" }}
                      checked={checkedItems.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    >
                      <input type="checkbox" id={`item-${item.id}`} />
                      <label
                        htmlFor={`item-${item.id}`}
                        style={{ marginLeft: "8px" }}
                      >
                        {item.name}
                      </label>
                    </li>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <div className="btncnt">
            <button className="save34" onClick={saveCheckedItems}>
              Save
            </button>
            <button className="del62" onClick={toggleAdditionalDiv}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vconnect;
