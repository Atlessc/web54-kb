// create a basic home page component
import React from "react";
import TextToJson from "../components/TextToJSON";

function Home() {
    return (
    <div>
        <h1>Home</h1>
        <p>Welcome to the home page</p>
        <p>the section below is to help create a json file from text in a hirearchial structure<br/> to then be displayed in then the "KBs" page</p>
        <TextToJson />
    </div>
    );
}

export default Home;