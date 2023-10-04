import React, { useState } from 'react';
import '../../styles/json.css';
import '../../styles/Tools.css';

function ArticleObjectGenerator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const generateJson = () => {
    const titles = input.split('\n');
    const articles = titles.map((title, index) => {
      return {
        "pageID": `WD00000${index + 1}.md`,
        "pageTitle": title.replace('/title ', ''),
        "attributes": 
          {
            "roleLvAccess": [
              "owner",
              "admin",
              "techLv2",
              "techLv1"
            ],
            "category": [],
            "atlArticle": "Example/url | file/path",
            "TicketInfoID": "TixInfo01.md"
          }
        
      };
    });
    console.log("should be an output text")

    setOutput(JSON.stringify( articles, null, 2));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="TextToJson">
      <h2>Article Object Generator</h2>
      <br/>
      <textarea value={input} onChange={handleChange} rows={10} cols={50} className="input-field" />
      <br/>
      <button onClick={generateJson}>Generate JSON</button>
      <br/>
      <button onClick={copyToClipboard}>Copy to Clipboard</button>
      <br/>
      <div className="JSONResponse output-text">{output}</div>
    </div>
  );
}

export default ArticleObjectGenerator;
