import { Link } from "react-router-dom";
import articles from './articles.json';
import '../styles/ToC.css'

function Articles() {
    return (
    <div className="table-of-content">
        <h1>Articles</h1>
        <p>Welcome to the articles page</p>
        <div className="articles-list">
          {articles.map(article => (
            <Link key={article.id} to={`/articles/${article.id}`}>
              <div className="item">{article.title}</div>
            </Link>
          ))}
        </div>
    </div>
);
};

export default Articles;