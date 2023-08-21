// create a basic home page component
import React from "react";
import TextToJson from "../components/TextToJSON";

function Home() {
    return (
    <div>
        <h1>Home</h1>
        <p>Welcome to the home page</p>
        <TextToJson />
    </div>
    );
}

export default Home;