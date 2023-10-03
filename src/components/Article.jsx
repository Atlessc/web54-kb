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

    function GetTicketInfoID(props) {
      // Get the id from the props
      const { id } = props;

      // Find the item in the Articles array that has the same pageID as the id
      const item = Articles.find((item) => item.pageID === id);

      let ticketInfoId;
      // If the item is found, check if it has a direct TicketInfoID property
      if (item && item.TicketInfoID) {
        ticketInfoId = item.TicketInfoID;
      } 
      // If not, check if it has an attributes array and use the TicketInfoID from the first attribute
      else if (item && item.attributes && item.attributes.length > 0 && item.attributes[0].TicketInfoID) {
        ticketInfoId = item.attributes[0].TicketInfoID;
      }

      // If ticketInfoId is found, return a Link element to its TicketInfoID. Otherwise, return a message.
      if (ticketInfoId) {
        return <Link to={`/ticket-info/${ticketInfoId}`} className='button'>
        Ticket Info
        </Link>;
      } else {
        return <p>no ticket info needed or not determined</p>;
      }
    }

  return (
    <div className="markdown">
      <GetTicketInfoID id={id} />
      <ReactMarkdown className='Article'>{articleMarkdown}</ReactMarkdown>
    </div>
  );
}

export default Article;
