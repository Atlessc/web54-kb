// Article.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Articles from "../data/articles-map.json";

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const articleData = Articles.Articles.find(article => article.pageID === id);
    setArticle(articleData);
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.pageTitle}</h1>
      <Link to={`/ticket-info/${article.TicketInfoID}`}>Ticket Info</Link>
    </div>
  );
}

export default Article;
