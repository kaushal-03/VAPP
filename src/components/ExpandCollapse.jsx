import React from "react";
import { useState } from "react";
import "./ExpandCollapse.css";
const ExpandCollapse = () => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("");
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState("");

  const handleExpandCollapse1 = () => {
    setIsExpanded1(!isExpanded1);
    setSelectedOption1(""); // Reset selected option when collapsing
  };

  const handleExpandCollapse2 = () => {
    setIsExpanded2(!isExpanded2);
    setSelectedOption2(""); // Reset selected option when collapsing
  };

  const handleOptionChange1 = (e) => {
    setSelectedOption1(e.target.value);
  };

  const handleOptionChange2 = (e) => {
    setSelectedOption2(e.target.value);
  };
  return (
    <div className="ecmain">
      <div className="ecsb"></div>
      <div className="btnspan">
        <div className="collapse1">
          <button onClick={handleExpandCollapse1} className="ectoggle">
            {isExpanded1 ? "⯅" : "⯆"}
          </button>
          <span className="ssec">Select the Services</span>
          {isExpanded1 && (
            <div className="expandclass">
              <label>
                <input
                  type="radio"
                  value="Option A"
                  checked={selectedOption1 === "Option A"}
                  onChange={handleOptionChange1}
                />
                On Boarding
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="Option B"
                  checked={selectedOption1 === "Option B"}
                  onChange={handleOptionChange1}
                />
                Off Boarding
              </label>
            </div>
          )}
        </div>

        <div className="collapse1">
          <button onClick={handleExpandCollapse2} className="ectoggle">
            {isExpanded2 ? "⯅" : "⯆"}
          </button>
          <span className="ssec">Select the Application</span>
          {isExpanded2 && (
            <div className="expandclass">
              <label >
                <input
                  type="radio"
                  value="Option 1"
                  checked={selectedOption2 === "Option 1"}
                  onChange={handleOptionChange2}
                />
                Salesforce
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="Option 2"
                  checked={selectedOption2 === "Option 2"}
                  onChange={handleOptionChange2}
                />
                Oracle
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="Option 3"
                  checked={selectedOption2 === "Option 3"}
                  onChange={handleOptionChange2}
                />
                Coupa
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="Option 4"
                  checked={selectedOption2 === "Option 4"}
                  onChange={handleOptionChange2}
                />
                Netsuite
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="Option 5"
                  checked={selectedOption2 === "Option 5"}
                  onChange={handleOptionChange2}
                />
                Workday
              </label>
            </div>
          )}
        </div>
        <div className="btncontainer">
          <button className="Gobtn">Go</button>
          <button className="canbtn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ExpandCollapse;
