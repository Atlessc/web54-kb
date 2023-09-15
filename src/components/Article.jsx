import React from 'react';
import { useParams, Link } from 'react-router-dom'; // import Link
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import Articles from "../data/articles-map.json";
import '../styles/Article.css';
import useStore from '../store';

function Article() {

  const data = Articles;

  const { id } = useParams();
  const [articleMarkdown, setArticleMarkdown] = useState('');
  const [article, setArticle] = useState('');
  const articleID = useStore(state => state.articleID);
  const setArticleID = useStore(state => state.setArticleID);
  const ticketInfoID = useStore(state => state.ticketInfoID);
  const setTicketInfoID = useStore(state => state.setTicketInfoID);

  console.log('Article ID:', articleID); // log the article ID
  console.log('Ticket Info ID:', ticketInfoID); // log the ticket info ID

  useEffect(() => {
    // Find the article with the matching id in the JSON data
    const foundArticle = data[id];
    console.log('Setting article ID:', foundArticle); // log before setting the article ID
  
    // Update the article state
    setArticle(foundArticle);
  
    // Fetch article content
    fetch(`/Articles/${id}`)
      .then((response) => response.text())
      .then((text) => {
        // Set the markdown state
        setArticleMarkdown(text); // log the fetched text
      });
      setTicketInfoID(foundArticle.TicketInfoID);
      console.log('Setting ticket info ID:', foundArticle.TicketInfoID); // log before setting the ticket info ID
  }, [id]);

  return (
    <div>
      <ReactMarkdown>{articleMarkdown}</ReactMarkdown>
      {/* <Link to={`/ticket-info/${ticketInfoID}`}>
        Ticket Info
      </Link> */}
    </div>
  );
}

export default Article;
