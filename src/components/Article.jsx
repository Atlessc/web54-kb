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
  const setArticleID = useStore((state) => state.setArticleID);
  const [ticketInfoID ,setTicketInfoID] = useState('');

  useEffect(() => {
    // The ID from the URL params is already in the correct format to use as a key in your JSON object.
    setArticleID(id); // This sets the article ID in your state
  
    // Fetch article content
    fetch(`/Articles/${id}`)
      .then((response) => response.text())
      .then((text) => {
        // Set the markdown state with the fetched content
        setArticleMarkdown(text);
        // Access the TicketInfoID using the articleID from the JSON object
        const tixInfoID = Articles.find(article => article[id] != null)?.[id].TicketInfoID
        console.log(tixInfoID, Articles, id);

         // Using optional chaining to avoid errors
        if (tixInfoID) {
          // Set the TicketInfoID in your state
          setTicketInfoID(tixInfoID);
        }
      })
      .catch((error) => {
        // It's a good practice to handle errors in case the fetch fails
        console.log('Error fetching article content:', error);
      });
  }, [id, setArticleID, setTicketInfoID]);

  return (
    <div className="markdown">
      <Link to={`/ticket-info/${ticketInfoID}`} className='button'>Ticket Info</Link>
      <ReactMarkdown className='Article'>{articleMarkdown}</ReactMarkdown>
    </div>
  );
}

export default Article;
