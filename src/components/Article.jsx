import React, { useState } from 'react';
import '../styles/Article.css';
import ArticleText from './ArticleText'; // import the ArticleText component
import TicketInfoText from './TicketInfoText'; // import the TicketInfoText component

function Article() {

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
          <TicketInfoText /> {/* use the TicketInfoText component */}
        </div>
      )}
    </div>
  );
}

export default Article;
