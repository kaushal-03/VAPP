import React from "react";
import { useState } from "react";
import "./Ascreen.css";
import sample from "../sample.png";
import jira from "../atlassian.png";
import right from "../right.png";
import left from "../left.png";
import MyChart from "./MyChart";
import SimplePieChart from "../SimplePieChart";
import SimpleBarChart from "./SimpleBarChart";
import Line from "../line.png";
import Pie from "../pie-chart.png";
import Table from "../table.png";
import Bar from "../bar-chart.png";
import Reset from "../reset.png";
import Next from "../next.png";
const Ascreen = () => {
  const [Showline, SetShowline] = useState(true);
  const [ShowPie, SetShowpie] = useState(true);
  const [ShowBar, SetShowbar] = useState(true);
  const [ShowChoose, SetShowchoose] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleButtonClick = () => {
    SetShowline(true);
    SetShowpie(true);
    SetShowbar(true);
    SetShowchoose(true);
  };
  return (
    <div className="mmain">
      <div className="sbar">
        <img src={jira} className="logo1" />
      </div>
      <div className="mains">
        <div className="controls1">
          <div className="form-group">
            <select id="dropdown">
              <option value="">Last Accessed</option>
              <option value="option1">30 days</option>
              <option value="option2">60 days</option>
              <option value="option3">180 days</option>
            </select>
          </div>
          <div className="form-group">
            <select id="dropdown">
              <option value="">User Status</option>
              <option value="option1">30 days</option>
              <option value="option2">60 days</option>
              <option value="option3">180 days</option>
            </select>
          </div>
          <button className="button-28">
            <img src={Next} className="ricon" />
          </button>
        </div>
        <div className="controls2">
          {Showline && <MyChart />}
          {ShowPie && <SimplePieChart />}
          {ShowBar && <SimpleBarChart />}
          {ShowChoose && (
            <div className="choose">
              <button className="cbtn">
                <img
                  src={Reset}
                  alt=""
                  className="cimg"
                  onClick={handleButtonClick}
                />
              </button>
              <button className="cbtn">
                <img
                  src={Line}
                  alt=""
                  className="cimg"
                  onClick={() => {
                    SetShowpie(false);
                    SetShowbar(false);
                    SetShowchoose(true);
                    setIsButtonDisabled(false);
                  }}
                />
              </button>
              <button className="cbtn">
                <img
                  src={Bar}
                  alt=""
                  className="cimg"
                  onClick={() => {
                    SetShowpie(false);
                    SetShowline(false);
                    SetShowchoose(true);
                  }}
                />
              </button>
              <button className="cbtn">
                <img
                  src={Pie}
                  alt=""
                  className="cimg"
                  onClick={() => {
                    SetShowbar(false);
                    SetShowline(false);
                    SetShowchoose(true);
                  }}
                />
              </button>
              <button className="cbtn">
                <img src={Table} alt="" className="cimg" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ascreen;
