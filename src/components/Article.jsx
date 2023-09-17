import React from 'react';
import { useParams, Link } from 'react-router-dom'; // import Link
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import Articles from "../data/Article-Objects.json";
import '../styles/Article.css';
import useStore from '../store';


function Article() {

  const data = Articles;

  const { id } = useParams();
  const [articleMarkdown, setArticleMarkdown] = useState('');
  const [article, setArticle] = useState('');

   // log the ticket info ID

   const pageID = data.Articles.pageID;



  useEffect(() => {
  
    // Fetch article content
    fetch(`/Articles/${id}`)
      .then((response) => response.text())
      .then((text) => {
        // Set the markdown state
        setArticleMarkdown(text);
        setArticle(id);
        set
      });
    }, [id]);

    // use the Article state to get the data.Articles.TicketInfoID
    const articleID = article;
    const ticketInfoID = data.Articles.TicketInfoID;

    console.log(`Setting ticket info ID: ${ticketInfoID}`); // log before setting the ticket info ID // log before setting the article ID
    console.log(`Article ID: ${articleID}`); // log the article ID
    console.log(`Ticket Info ID: ${ticketInfoID}`);

  return (
    <div>
      <ReactMarkdown>{articleMarkdown}</ReactMarkdown>
      <Link to={`/ticket-info/${ticketInfoID}`}>
        Ticket Info
      </Link>
    </div>
  );
}

export default Article;
