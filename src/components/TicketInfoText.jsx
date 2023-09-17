// TicketInfoText.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      <h2>Ticket Information for Article {id}</h2>
      <p>{ticketInfoText}</p>
    </div>
  );
}

export default TicketInfoText;
