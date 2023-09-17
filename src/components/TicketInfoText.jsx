// TicketInfoText.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import '../styles/Article.css';

function TicketInfoText() {
  const { id } = useParams();
  const [ticketInfoText, setTicketInfoText] = useState('');

  useEffect(() => {
    fetch(`/TicketInfo/${id}`)
      .then((response) => response.text())
      .then((text) => {
        setTicketInfoText(text);
      });
  }, [id]);

  return (
    <div className="markdown">
      <h2>Ticket Information for Article {id}</h2>
      <ReactMarkdown>{ticketInfoText}</ReactMarkdown>
    </div>
  );
}

export default TicketInfoText;
