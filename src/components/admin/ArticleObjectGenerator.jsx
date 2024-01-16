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
      const pageID = `WD${(index + 1).toString().padStart(6, "0")}.md`;
  
      // Extracting the number after '@' and formatting the TicketInfoID
      const ticketInfoMatch = title.match(/@(\d+)/);
      let ticketInfoID = '';
      if (ticketInfoMatch) {
        const ticketNumber = parseInt(ticketInfoMatch[1], 10);
        ticketInfoID = ticketNumber === 0 ? '' : `TixInfo${ticketNumber.toString().padStart(2, '0')}.md`;
      } else {
        // Handle error for missing '@' symbol
        console.error(`Error: '@' symbol is missing in the title "${title}"`);
      }
  
      // Trimming '/' from the start and everything after '@' for pageTitle
      const pageTitle = title.split('@')[0].replace(/^\//, '').trim();
  
      return {
        [pageID]: {
          "pageTitle": pageTitle,
          "roleLvAccess": ["owner", "admin", "techLv2", "techLv1"],
          "category": [],
          "atlArticle": "Example/url | file/path",
          "TicketInfoID": ticketInfoID
        }
      };
    });
  
    setOutput(JSON.stringify(articles, null, 2));
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
