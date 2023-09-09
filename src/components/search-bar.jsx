import { useState } from 'react';
import { Link } from 'react-router-dom';
import articles from '../pages/articles.json';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim() === '') {
      // The search field is blank, do not perform the search
      setResults([]);
    } else {
      // The search field is not blank, perform the search
      const filteredArticles = articles.filter(article =>
        article.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
      );
      setResults(filteredArticles);
    }
  }

  function HandleChoose() {
    setQuery('');
    setResults([]);
  }

  return (
    <div className='search'>
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={event => setQuery(event.target.value)} className='search-field'/>
        <button type="submit" className='search-button'>Search</button>
      </form>
      <ul className='search-results'>
        {results.map(article => (
          <Link key={article.id} to={`/articles/${article.id}`}>
            <li className='result-item' onClick={HandleChoose}>{article.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Search;
