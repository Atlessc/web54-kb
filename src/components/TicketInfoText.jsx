import data from '../data/articles-map.json';
import ReactMarkdown from 'react-markdown';
import '../styles/Article.css'
import { useEffect, useState } from 'react';
import useStore from '../store';
import { useParams } from 'react-router-dom';

export default function TicketInfoText() {

  const { id } = useParams();

  const articleID = useStore(state => state.articleID);
  const ticketInfoID = useStore(state => state.ticketInfoID);
  const [ticketInfoText, setTicketInfoText] = useState('')

  
  useEffect(() => {
    console.log('Setting ticket info ID:', {ticketInfoID}); // log before setting the ticket info ID

    // Fetch article content
    fetch(`/TicketInfo/${id}`)
      .then((response) => response.text())
      .then((text) => {
        // Set the markdown state
        setTicketInfoText(text);
      });
  }, [id]);

  console.log('Article ID:', {articleID}); // log the article ID
  console.log('Ticket Info ID:', {ticketInfoID}); // log the ticket info ID

  return (
    <div>
      <h2>Still not working?</h2>
      {/* Render the information needed for the ticket here */}
      <p>Ticket Information for Article {articleID}</p>
      <ReactMarkdown>{ticketInfoText}</ReactMarkdown>
    </div>
  )
}
