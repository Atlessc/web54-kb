import React from 'react';
import { useParams, Link } from 'react-router-dom'; // import Link
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import Articles from "../data/Article-Objects.json";
import '../styles/Article.css';

function Article() {

  const { id } = useParams();
  const [articleMarkdown, setArticleMarkdown] = useState('');
  const [article, setArticle] = useState('');

  useEffect(() => {
    // Fetch article content
    fetch(`/Articles/${id}`)
      .then((response) => response.text())
      .then((text) => {
        // Set the markdown state
        setArticleMarkdown(text);
        setArticle(id);
      });
      console.log(id);
    }, [id]);

    async function GetTicketInfoID(props) {
      // Get the id from the props
      const { id } = props;
    
      // Initialize ticketInfoId
      let ticketInfoId;
    
      // Fetch the item in the Articles array that has the same pageID as the id
      const response = await fetch(`/Articles/${id}`);
      const data = await response.json();
      const item = data.find((item) => item.pageID === id);
    
      // If the item is found, check its attributes array for an object with a TicketInfoID
      if (item && item.attributes) {
        for (let attribute of item.attributes) {
          if (attribute.TicketInfoID) {
            ticketInfoId = attribute.TicketInfoID;
            break;
          }
        }
      }
    
      // If ticketInfoId is found, return a Link element to its TicketInfoID. Otherwise, return a message.
      return (
        <Link to={`/ticket-info/${ticketInfoId}`} className='button'>
          Ticket Info
        </Link>
      );
    }
    
    

  return (
    <div className="markdown">
      <GetTicketInfoID id={id} />
      <ReactMarkdown className='Article'>{articleMarkdown}</ReactMarkdown>
    </div>
  );
}

export default Article;
