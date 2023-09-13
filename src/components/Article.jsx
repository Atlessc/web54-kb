import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import '../styles/Article.css';

function Article() {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [showTicketInfo, setShowTicketInfo] = useState(false);
  // const [ticketText, setTicketText] = useState('');

  useEffect(() => {
    fetch(`/Articles/${id}`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [id]);



  // useEffect(() => {

  //   fetch(`/TicketInfo/`)
  //     .then((response) => response.text())
  //     .then((text) => setTicketText(text));
  // }, [id]);

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
          {/* <p>{ticketText}</p> */}
        </div>
      )}
    </div>
  );
}

export default Article;
