import data from '../data/articles-map.json';
import ReactMarkdown from 'react-markdown';
import '../styles/Article.css'
import { useEffect, useState } from 'react';
import { useStore } from 'zustand';

export default function TicketInfoText() {

  const articleID = useStore(state => state.articleID);
  const setTicketInfo = useStore(state => state.setTicketInfo);
  const ticketInfoID = useStore(state => state.ticketInfoID);
  const [ticketInfoText, setTicketInfoText] = useState('')

  console.log('Article ID from store:', articleID); // log the article ID

  useEffect(() => {
    const ticketInfoID = data[articleID].TicketInfoID;
    console.log('Setting ticket info ID in store:', ticketInfoID); // log before setting the ticket info ID
    setTicketInfo(ticketInfoID);
  }, [articleID]);

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
      <h2>Still not working?</h2>
      {/* Render the information needed for the ticket here */}
      <p>Ticket Information for Article {articleID}</p>
      <ReactMarkdown>{ticketInfoText}</ReactMarkdown>
    </div>
  )
}
