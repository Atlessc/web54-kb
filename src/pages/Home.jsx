// create a basic home page component
import React, {useState} from "react";
import TextToJson from "../components/TextToJSON";

import "../styles/Home.css";

function Home() {

    return (
    <div className="Home-container">
        <h1>Home</h1>
        <p>Welcome to the home page</p>
        <p>the section below is to help create a json file from text in a hirearchial structure<br/> to then be displayed in the "KBs" page</p>
        <div className="Tool-container">
            <TextToJson />
        </div>
    </div>
    );
}

export default Home;