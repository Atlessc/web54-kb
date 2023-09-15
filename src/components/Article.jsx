import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import Articles from "../data/articles-map.json";
import '../styles/Article.css';
import { useStore } from 'zustand';

function Article() {

  const data = Articles;

  const { id } = useParams();
  const [articleMarkdown, setArticleMarkdown] = useState('');
  const [article, setArticle] = useState(null);
  const articleID = useStore(state => state.articleID);
  const setArticleID = useStore(state => state.setArticleID);

  useEffect(() => {
    // Find the article with the matching id in the JSON data
    const foundArticle = data[id];
  
    // Update the article state
    setArticle(foundArticle);
  
    // Fetch article content
    fetch(`/Articles/${id}`)
      .then((response) => response.text())
      .then((text) => {
        // Set the markdown state
        setArticleMarkdown(<ReactMarkdown className='markdown'>{text}</ReactMarkdown>);
      });
  }, [id]);

  const handleButtonClick = () => {
    setShowTicketInfo(!showTicketInfo);
  };

  return (
    <div>
      <div>{articleMarkdown}</div>
      <button onClick={handleButtonClick}>
        {showTicketInfo ? 'Hide Ticket Info' : 'Show Ticket Info'}
      </button>
      {showTicketInfo && (
        <div>
          <h2>Still not working?</h2>
          {/* Render the information needed for the ticket here */}
          <p>Ticket Information for Article {id}</p>
          <div>{ticketMarkdown}</div>
        </div>
      )}
    </div>
  );
}

export default Article;
