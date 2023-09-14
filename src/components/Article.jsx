import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import Articles from "../data/articles-map.json";
import '../styles/Article.css';

function Article() {

  const data = Articles;

  const { id } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [showTicketInfo, setShowTicketInfo] = useState(false);
  const [ticketText, setTicketText] = useState('');
  const [ticketId, setTicketId] = useState('');
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Find the article with the matching id in the JSON data
    const foundArticle = data[id];

    // Update the article state
    setArticle(foundArticle);

    // Fetch article content
    fetch(`/Articles/${id}`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [id]);

  useEffect(() => {
    if (article) {
      // Update the ticketId state
      setTicketId(article.TicketInfoID);

      // Fetch ticket info
      fetch(`/TicketInfo/${ticketId}`)
        .then((response) => response.text())
        .then((text) => setTicketText(text));
        console.log(`${ticketText}`);
    }
  }, [article]);

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
          <h2>Still not working?</h2>
          {/* Render the information needed for the ticket here */}
          <p>Ticket Information for Article {id}</p>
          <p className='markdown'>{ticketText}</p>
        </div>
      )}
    </div>
  );
}

export default Article;
