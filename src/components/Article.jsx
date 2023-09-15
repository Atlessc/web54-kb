import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Article.css';
import ArticleText from './ArticleText'; // import the ArticleText component
import TicketInfoText from './TicketInfoText'; // import the TicketInfoText component

function Article() {

  const { id } = useParams();
  
  const [showTicketInfo, setShowTicketInfo] = useState(false);

  const handleButtonClick = () => {
    setShowTicketInfo(!showTicketInfo);
  };

  return (
    <div>
      <ArticleText /> {/* use the ArticleText component */}
      <button onClick={handleButtonClick}>
        {showTicketInfo ? 'Hide Ticket Info' : 'Show Ticket Info'}
      </button>
      {showTicketInfo && (
        <div>
          <h2>Still not working?</h2>
          {/* Render the information needed for the ticket here */}
          <p>Ticket Information for Article {id}</p>
          <TicketInfoText /> {/* use the TicketInfoText component */}
        </div>
      )}
    </div>
  );
}

export default Article;
