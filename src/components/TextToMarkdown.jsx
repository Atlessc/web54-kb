import React, { useState } from 'react';
import data from './markdownRules.json';

const convertToMarkdown = (text) => {
  // Split text into multiple files separated by "========"
  const files = text.split('========');

  // Convert each file to markdown
  const markdownFiles = files.map((file) => {
    let markdown = '';

    // Split file into lines
    const lines = file.split('\n');

    // Process each line
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Check for empty line
      if (line.trim() === '') {
        markdown += '\n';
        continue;
      }

      // Check for heading
      if (line.startsWith('&')) {
        const match = line.match(/^&(\d) (.*)$/);
        if (!match) {
          throw new Error(`Invalid heading syntax on line ${i + 1}`);
        }
        const level = parseInt(match[1], 10);
        if (level < 1 || level > 6) {
          throw new Error(`Invalid heading level on line ${i + 1}`);
        }
        const text = match[2];
        markdown += `${'#'.repeat(level)} ${text}\n`;
        continue;
      }

      // Check for footer
      if (line.startsWith('^')) {
        const text = line.slice(1).trim();
        markdown += `<footer>${text}</footer>\n`;
        continue;
      }

      // Check for ordered list
      if (line.startsWith('#')) {
        const items = line.slice(1).split(',');
        markdown += items
          .map((item) => {
            item = item.trim();
            if (item.startsWith('(') && item.endsWith(')')) {
              return `- ${item.slice(1, -1).split(',').join('\n  - ')}`;
            }
            return `1. ${item}`;
          })
          .join('\n');
        markdown += '\n';
        continue;
      }

      // Check for unordered list
      if (line.startsWith('*')) {
        const items = line.slice(1).split(',');
        markdown += items
          .map((item) => {
            item = item.trim();
            if (item.startsWith('(') && item.endsWith(')')) {
              return `- ${item.slice(1, -1).split(',').join('\n  - ')}`;
            }
            return `- ${item}`;
          })
          .join('\n');
        markdown += '\n';
        continue;
      }

      // Check for image
      if (line.startsWith('@')) {
        const match = line.match(/^@ (.*) \[(.*)\]$/);
        if (!match) {
          throw new Error(`Invalid image syntax on line ${i + 1}`);
        }
        const src = match[1];
        const alt = match[2];
        markdown += `!${alt}\n`;
        continue;
      }

      // Check for link
      if (line.startsWith('$')) {
        const match = line.match(/^\$ (.*) \[(.*)\]\((.*)\)$/);
        if (!match) {
          throw new Error(`Invalid link syntax on line ${i + 1}`);
        }
        const textBeforeLink = match[1];
        const linkText = match[2];
        const linkUrl = match[3];
        markdown += `${textBeforeLink}${linkText}\n`;
        continue;
      }

      // Check for table
      if (line.startsWith('%')) {
        const rows = line.slice(1).split(';');
        markdown += rows
          .map((row, rowIndex) => {
            const cells = row.split(',');
            return `| ${cells
              .map((cell) => {
                cell = cell.trim();
                if (rowIndex === 0 && cell.startsWith('*')) {
                  return `**${cell.slice(1)}**`;
                }
                return cell;
              })
              .join(' | ')} |`;
          })
          .join('\n');
        markdown += '\n';
        continue;
      }

      // Check for bold text
      if (line.includes('**')) {
        markdown += line.replace(/\*\*(.+?)\*\*/g, '**$1**') + '\n';
        continue;
      }

      // Check for italic text
      if (line.includes('/')) {
        markdown += line.replace(/\/(.+?)\//g, '*$1*') + '\n';
        continue;
      }

      // Check for code
      if (line.startsWith('`')) {
        const match = line.match(/^`(.*)`$/);
        if (!match) {
          throw new Error(`Invalid code syntax on line ${i + 1}`);
        }
        const code = match[1];
        markdown += `\`\`\`\n${code}\n\`\`\`\n`;
        continue;
      }

      // Check for blockquote
      if (line.startsWith('>')) {
        const text = line.slice(1).trim();
        markdown += `> ${text}\n`;
        continue;
      }

      // Check for strikethrough text
      if (line.includes('~~')) {
        markdown += line.replace(/~~(.+?)~~/g, '~~$1~~') + '\n';
        continue;
      }

      // Check for heading ID
      if (line.startsWith('{}')) {
        const match = line.match(/^\{(.*)\} (.*)$/);
        if (!match) {
          throw new Error(`Invalid heading ID syntax on line ${i + 1}`);
        }
        const id = match[1];
        const text = match[2];
        markdown += `<h2 id="${id}">${text}</h2>\n`;
        continue;
      }

      // Check for task list
      if (line.startsWith('[]')) {
        const items = line.split(',');
        markdown += items
          .map((item) => {
            item = item.trim();
            if (item.startsWith('[') && item.endsWith(']')) {
              const checked = item.slice(1, -1).trim() === 'x';
              return `- [${checked ? 'x' : ' '}] ${item.slice(3).trim()}`;
            }
            return `- [ ] ${item}`;
          })
          .join('\n');
        markdown += '\n';
        continue;
      }

      // No special syntax detected, add line as is
      markdown += `${line}\n`;
    }

    return markdown;
  });

  // Join converted files with "========"
  return markdownFiles.join('\n========\n');
};

// const markDownRules = () => {
//     let result = "";
//     data["Syntax-Rules"].forEach((rule) => {
//       result += `${rule.character} = ${rule.description}\n`;
//       rule.Examples.forEach((example) => {
//         result += `    ${Object.values(example)}\n`;
//       });
//     });
//     return result;
//   };

const TextToMarkdown = () => {
  const [inputText, setInputText] = useState('');
  const [markdownText, setMarkdownText] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleConvertClick = () => {
    try {
      const markdown = convertToMarkdown(inputText);
      setMarkdownText(markdown);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(markdownText);
  };

  return (
    <div>
        {/* <div>
            {markDownRules()}
        </div> */}
      <textarea rows={10} cols={50} value={inputText} onChange={handleInputChange} />
      <br />
      <button onClick={handleConvertClick}>Convert to Markdown</button>
      <br />
      <button onClick={handleCopyClick}>Copy Markdown</button>
      <br />
      {error && <p>{error}</p>}
      <br />
      <pre>{markdownText}</pre>
    </div>
  );
};

export default TextToMarkdown;
