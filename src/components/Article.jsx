import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import Articles from "../data/articles-map.json";
import '../styles/Article.css';

function Article() {

  const data = Articles;

  const { id } = useParams();
  const [articleMarkdown, setArticleMarkdown] = useState('');
  const [ticketMarkdown, setTicketMarkdown] = useState('');
  const [showTicketInfo, setShowTicketInfo] = useState(false);
  const [ticketText, setTicketText] = useState('');
  const [ticketId, setTicketId] = useState('');
  const [article, setArticle] = useState('');

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
      fetch(`/TicketInfo/${article.TicketInfoID}`)
        .then((response) => response.text())
        .then((text) => {
          setTicketText(text);
          console.log(`${text}`);
        });
    }
  }, [article]);

  const setArticleText = () => {
    return (
      <div>
        <ReactMarkdown className='markdown'>{markdown}</ReactMarkdown>
      </div>
    );
  }

  function TicketTextRender() {
    return (
      <div>
        <ReactMarkdown className='markdown'>{ticketText}</ReactMarkdown>
      </div>
    );
  }
  

  const handleButtonClick = () => {
    setShowTicketInfo(!showTicketInfo);
  };

  return (
    <div>
      <div>{ArticleTextRender}</div>
      <button onClick={handleButtonClick}>
        {showTicketInfo ? 'Hide Ticket Info' : 'Show Ticket Info'}
      </button>
      {showTicketInfo && (
        <div>
          <h2>Still not working?</h2>
          {/* Render the information needed for the ticket here */}
          <p>Ticket Information for Article {id}</p>
          <div>{TicketTextRender}</div>
        </div>
      )}
    </div>
  );
}

export default Article;
