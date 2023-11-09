import React from 'react';
import { useParams, Link } from 'react-router-dom'; // import Link
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import Articles from "../data/Article-Objects.json";
import '../styles/Article.css';
import useStore from '../store';


function Article() {

  const { id } = useParams();
  const [articleMarkdown, setArticleMarkdown] = useState('');
  const articleID = useStore((state) => state.articleID);
  const setArticleID = useStore((state) => state.setArticleID);
  const ticketInfoID = useStore((state) => state.ticketInfoID);
  const setTicketInfoID = useStore((state) => state.setTicketInfoID);

  setArticleID(id);

  useEffect(() => {
    setArticleID(id);

    // Fetch article content
    fetch(`/Articles/${id}`)
      .then((response) => response.text())
      .then((text) => {
        // Set the markdown state
        setArticleMarkdown(text);
        
    // Fetch TicketInfoID and set it in your store
        // set a timer to wait for the article to load
        setTimeout(() => {
          setTicketInfoID(Articles[articleID].TicketInfoID);
        }, 1000);
      });
      // TicketInfo();
    console.log(articleID);
  }, [id]);

  // function TicketInfo () {
  //   setTicketInfoID(Articles[articleID].TicketInfoID);
  //   console.log(ticketInfoID);
  // }

    

  return (
    <div className="markdown">
      <Link to={`/ticket-info/${ticketInfoID}`} className='button'>Ticket Info</Link>
      <ReactMarkdown className='Article'>{articleMarkdown}</ReactMarkdown>
    </div>
  );
}

export default Article;
