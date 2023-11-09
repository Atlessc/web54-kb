import React, { useState } from 'react';
import '../../styles/json.css';
import '../../styles/Tools.css';

function textToJson(text) {
  const lines = text.split('\n');
  const json = { 'TableOfContents': [] };
  let currentSection = json['TableOfContents'];
  let sectionStack = [];
  let pageID = 1;
  let error = null;

  for (const [index, line] of lines.entries()) {
    if (line.startsWith('>')) {
      const level = line.lastIndexOf('>') + 1;
      const title = line.slice(level).trim();
      while (sectionStack.length >= level) {
        currentSection = sectionStack.pop();
      }
      if (!currentSection) {
        error = `Error on line ${index + 1}: Missing parent section`;
        break;
      }
      const newSection = {
        'SectionTitle': title,
        'Items': []
      };
      currentSection.push(newSection);
      sectionStack.push(currentSection);
      currentSection = newSection.Items;
    } else if (line.startsWith('/')) {
      const pageItem = {
        'pageID': `WD${pageID.toString().padStart(6, '0')}.md`,
        'pageTitle': line.slice(1).trim(),
      };
      pageID += 1;
      if (!currentSection) {
        error = `Error on line ${index + 1}: Missing parent section`;
        break;
      }
      currentSection.push(pageItem);
    } else if (line.startsWith('<')) {
      currentSection = sectionStack.pop();
    } else if (line.trim() !== '') {
      error = `Error on line ${index + 1}: Unknown character "${line[0]}"`;
      break;
    }
  }

  return { json, error };
}

const TextToJson = () => {
  const [text, setText] = useState('');
  const [json, setJson] = useState(null);
  const [error, setError] = useState(null);
  const [showRules, setShowRules] = useState(false);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleConvertClick = () => {
    const result = textToJson(text);
    setJson(result.json);
    setError(result.error);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(JSON.stringify(json, null, 2));
  };

  const toggleShowRules = () => {
    setShowRules(!showRules);
  };

  return (
    <div className="TextToJson">
      <h2>Table of Content Generator</h2>
      <h3 onClick={toggleShowRules} className='rules-btn'>Rule Set<span> ^</span></h3>
      {showRules && (
      <pre className="rules">
{`> = Section
>> = Subsection
>>> = Subsubsection
/ = Page
< = End of section
<< = End of parent section of the current section

Example:
>Section1
/Page1
/Page2
/Page3
>>Section1.1
/Page4
/Page5
>>>Section1.1.1
/Page6
/Page7
<
/Page8
/Page9
<
/Page10
<`}
      </pre>
      
      )}
      <br />
      <textarea value={text} onChange={handleTextChange} rows={10} cols={50} className="input-field" />
      <br />
      <button onClick={handleConvertClick}>Convert to JSON</button>
      <br />
      {error && (
        <>
          <p style={{ color: 'red' }}>{error}</p>
          <br />
        </>
      )}
      {json && !error && (
        <>
        <br/>
          <button onClick={handleCopyClick}>Copy JSON</button>
          <pre className="JSONResponse output-text">{JSON.stringify(json, null, 2)}</pre>
        </>
      )}
    </div>
  );
};

export default TextToJson;
