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
    }, [id]);

    function GetTicketInfoID(props) {
      // Get the id from the props
      const { id } = props;
    
      // Check if Articles is an array
      if (Array.isArray(Articles)) {
        // Find the item in the Articles array that has the same pageID as the id
        const item = Articles.find((item) => item.pageID === id);
      
        // If the item is found, return a Link element to its TicketInfoID. Otherwise, return a message.
        if (item) {
          return <Link to={`/ticket-info/${item.TicketInfoID}`}>
          Ticket Info
        </Link>;
        } else {
          return <p>no ticket info needed or not determined</p>;
        }
      } else {
        // Handle the case when Articles is not an array
        console.log("Articles is not an array");
      }
      
    }

  return (
    <div className="markdown">
      <ReactMarkdown>{articleMarkdown}</ReactMarkdown>
      {/* Pass the id as a prop to the GetTicketInfoID function */}
      <GetTicketInfoID id={id} />
    </div>
  );
}

export default Article;
