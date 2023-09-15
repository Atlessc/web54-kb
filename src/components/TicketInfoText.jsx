import data from '../data/articles-map.json';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import '../styles/Article.css'
import { useEffect, useState } from 'react';
import { useStore } from 'zustand';

export default function TicketInfoText() {

    const { id } = useParams();

  const articleID = useStore(state => state.articleID); // add a state variable for the ticket info
  const ticketInfoID = useStore(state => state.ticketInfoID);
  const [ticketInfoText, setTicketInfoText] = useState('');

  useEffect(() => {
  
    // Fetch article content
    fetch(`/ticket-info/${id}`)
      .then((response) => response.text())
      .then((text) => {
        // Set the markdown state
        setTicketInfoText(<ReactMarkdown className='markdown'>{text}</ReactMarkdown>);
      });
  }, [id]);

  return (
    <div>
      {/* Render the information needed for the ticket here */}
      <h2>Ticket Information for Article {articleID}</h2>
      <ReactMarkdown>{ticketInfoText}</ReactMarkdown>
    </div>
  )
}
