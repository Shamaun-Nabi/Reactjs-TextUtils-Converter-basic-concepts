import React, { useState } from "react";
import "./App.css";

export default function TextForms() {
    // Making rows as a int
  const rows = 8; 
  const [myText, change] = useState("default text");
  const makeUpper = () => {
    change(myText.toUpperCase());
    console.log("clicked");
  };
  const clickChange = (event) => {
    change(event.target.value);
    console.log("click on change");
  };
  const makeLower = () => {
    change(myText.toLowerCase());
  };
  return (
    <div className="container mt-3">
      <div className="mb-3">
        <label className="form-label text-white">Type Your Text Here</label>
        <textarea className="form-control" value={myText} onChange={clickChange} id="exampleFormControlTextarea1" rows={rows}></textarea>
      </div>
      <button className="btn btn-primary m-2 " onClick={makeUpper}>
        UpperCase
      </button>
      <button className="btn btn-danger" onClick={makeLower}>
        LowerCase
      </button>
      {/* <button className="btn btn-success text-white m-2">UpperCase</button>
      <button className="btn btn-dark text-white">UpperCase</button> */}
    </div>
  );
}
