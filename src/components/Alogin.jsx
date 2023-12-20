import React from "react";
import "./Alogin.css";
import Certificate from "../certificate.png";
import Group from "../group.png";
import Access from "../access.png";
import Card from "./Card";
const Alogin = () => {
  return (
    <div className="allmain">
    <div className="almain">
      <Card isrc={Certificate} heading="License Management" />
      <Card isrc={Access} heading="SOD" />
      <Card isrc={Group} heading="User Management" />
      <Card isrc={Group} heading="VConnect" />
    </div>
    </div>
  );
};

export default Alogin;
