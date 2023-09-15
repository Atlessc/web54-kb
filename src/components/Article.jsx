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

   // log the ticket info ID

  useEffect(() => {
  
    // Fetch article content
    fetch(`/Articles/${id}`)
      .then((response) => response.text())
      .then((text) => {
        // Set the markdown state
        setArticleMarkdown(text); // log the fetched text
      });
      setTicketInfoID(`${foundArticle.TicketInfoID}`);
    }, [id]);

    console.log('Setting ticket info ID:', ticketInfoID); // log before setting the ticket info ID
    console.log('Setting article ID:', foundArticle); // log before setting the article ID
  console.log('Article ID:', articleID); // log the article ID
  console.log('Ticket Info ID:', ticketInfoID);

  return (
    <div>
      {/* <ReactMarkdown>{articleMarkdown}</ReactMarkdown> */}
      <Link to={`/ticket-info/${ticketInfoID}`}>
        Ticket Info
      </Link>
    </div>
  );
}

export default Article;
