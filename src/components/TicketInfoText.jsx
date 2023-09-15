import data from '../data/articles-map.json';
import ReactMarkdown from 'react-markdown';
import '../styles/Article.css'
import { useEffect, useState } from 'react';
import { useStore } from 'zustand';

export default function TicketInfoText() {

  const articleID = useStore(state => state.articleID);
  const [ticketInfo, setTicketInfo] = useState(null); // add a state variable for the ticket info
  const ticketInfoID = useStore(state => state.ticketInfoID);
  const [ticketInfoText, setTicketInfoText] = useState('')

  console.log('Article ID from store:', articleID); // log the article ID

  useEffect(() => {
    async function fetchTicketInfo() {
      console.log('Fetching ticket info:', ticketInfoID); // log before fetching the ticket info
      const response = await fetch(`/TicketInfo/TixInfo${ticketInfoID}.md`);
      const text = await response.text();
      console.log('Fetched ticket info text:', text); // log the fetched text
      setTicketInfoText(text);
    }

    fetchTicketInfo();
  }, [ticketInfoID]);

  return (
    <div>
      {/* Render the information needed for the ticket here */}
      <h2>Ticket Information for Article {articleID}</h2>
      <ReactMarkdown>{ticketInfoText}</ReactMarkdown>
    </div>
  )
}
