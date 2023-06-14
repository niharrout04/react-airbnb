import React from "react";
import logo from "../images/katie-zaferes.png";
import star from "../images/star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={logo} alt="Katie Zaferes" className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star"/>
        <span>5.0</span>
        <span className="grey">(6) • </span>
        <span className="grey">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  ); 
}
