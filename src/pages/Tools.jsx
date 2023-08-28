import React from "react";
import TextToJSON from "../components/TextToJSON";
import "../styles/Home.css";

export default function Tools() {
  return (
    <div className="tools-container">
      <h1>Tools</h1>
      <p>the section below is to help create a json file from text in a hirearchial structure<br/> to then be displayed in the "KBs" page</p>
      <TextToJSON />
    </div>
  );
}