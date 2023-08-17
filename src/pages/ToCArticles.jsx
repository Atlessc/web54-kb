import { Link } from "react-router-dom";
import articles from './articles.json';

function Articles() {
    return (
    <div>
        <h1>Articles</h1>
        <p>Welcome to the articles page</p>
        <ul>
          {articles.map(article => (
            <Link key={article.id} to={`/articles/${article.id}`}>
              <li>{article.title}</li>
            </Link>
          ))}
        </ul>
    </div>
);
};

export default Articles;