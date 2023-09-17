// TicketInfoText.js
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom'; // import useLocation
import ReactMarkdown from 'react-markdown';
import '../styles/Article.css';

function TicketInfoText() {
  const { id } = useParams();
  const [ticketInfoText, setTicketInfoText] = useState('');

  // Get the current location object using useLocation hook
  const location = useLocation();

  // Get the URL or param origin from the location state
  const origin = location.state?.from;

  // Use the origin as data for your component logic
  console.log(origin);

  useEffect(() => {
    fetch(`/TicketInfo/${id}`)
      .then((response) => response.text())
      .then((text) => {
        setTicketInfoText(text);
      });
  }, [id]);

  return (
    <div className="markdown">
      <h2>Ticket Information</h2>
      <p>Make sure you grab the WD article number to reference it in the ticket.</p>
      <ReactMarkdown>{ticketInfoText}</ReactMarkdown>
    </div>
  );
}

export default TicketInfoText;
