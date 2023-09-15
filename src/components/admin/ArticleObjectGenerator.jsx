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
        "keywords": [],
        "roleLvAccess": [
          "owner",
          "admin",
          "techLv2",
          "techLv1"
        ],
        "category": [],
        "atlArticle": "Example/url | file/path",
        "TicketInfoID": `TixInfo0${index + 1}.md`
      };
    });

    setOutput(JSON.stringify({ Articles: articles }, null, 2));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div>
      <h2>Article Object Generator</h2>
      <textarea value={input} onChange={handleChange} />
      <button onClick={generateJson}>Generate JSON</button>
      <button onClick={copyToClipboard}>Copy to Clipboard</button>
      <textarea value={output} readOnly />
    </div>
  );
}

export default ArticleObjectGenerator;