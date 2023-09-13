import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import '../styles/Article.css';

function Article() {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [showTicketInfo, setShowTicketInfo] = useState(false);

  useEffect(() => {
    fetch(`/Articles/${id}`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [id]);

  const handleButtonClick = () => {
    setShowTicketInfo(!showTicketInfo);
  };

  return (
    <div>
      <ReactMarkdown className='markdown'>{markdown}</ReactMarkdown>
      <button onClick={handleButtonClick}>
        {showTicketInfo ? 'Hide Ticket Info' : 'Show Ticket Info'}
      </button>
      {showTicketInfo && (
        <div>
          {/* Render the information needed for the ticket here */}
          <p>Ticket Information for Article {id}</p>
        </div>
      )}
    </div>
  );
}

export default Article;
