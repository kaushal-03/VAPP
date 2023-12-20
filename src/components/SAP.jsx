import React from "react";
import "./SAP.css";
import download from "../download.png";
import execute from "../execute.png"
const SAP = () => {
  return (
    <div className="sapmain">
      <div className="navbar"> User Admin</div>
      <div className="sapcard">
        <div className="ii1">
          <label>API KEY</label>
          <input type="text" className="APIIN" placeholder="Enter your API key"></input>
        </div>
        <div className="ii1">
            <label>OR</label>
        </div>
        <div className="ii1">
          <input
            type="file"
            id="fileInput"
            accept=".jpg, .jpeg, .png" /* Optional: specify accepted file types */
            className="filein"
          />
        </div>
        <div className="ii1"><button className="button-19"><img src={execute} className="dimg"/> Execute</button></div>
      <div className="ii1"><button className="button-18"><img src={download} className="dimg"/> Download The Report</button></div>
      </div>
      
    </div>
  );
};

export default SAP;
