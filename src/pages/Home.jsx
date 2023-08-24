// create a basic home page component
import React, {useState} from "react";
import TextToJson from "../components/TextToJSON";
import TextToMarkdown from "../components/TextToMarkdown";

function Home() {
    const [showTools, setShowTools] = useState(false);
    const [changeText, setChangeText] = useState("JSON Tool");
    const Text = changeText

    const ToggleTools = () => {
        setShowTools(!showTools);
        if (changeText === "JSON Tool") {
            setChangeText("MarkDown Tool");
        } else {
            setChangeText("JSON Tool");
        }
    };

    return (
    <div>
        <h1>Home</h1>
        <p>Welcome to the home page</p>
        <p>the section below is to help create a json file from text in a hirearchial structure<br/> to then be displayed in then the "KBs" page</p>
        <button onClick={ToggleTools}>{Text}</button>
        {showTools ? <TextToMarkdown /> : <TextToJson />}
    </div>
    );
}

export default Home;