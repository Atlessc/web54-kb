import data from '../data/articles-map.json';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'; // import useState and useEffect
import '../styles/Article.css'
import { useStore } from 'zustand';

export default function ArticleText() {

  const { id } = useParams();
  const setArticleID = useStore(state => state.setArticleID);
  const [articleText, setArticleText] = useState(''); // add a state variable for the article text

  // set the article id from the useParams to the Article state in the useStore hook
  useEffect(() => {
    setArticleID(id);
  }, [id, setArticleID]);

  useEffect(() => {
    async function fetchArticle() {
      const response = await fetch(`/Articles/${id}`);
      const text = await response.text();
      setArticleText(text); // set the state variable with the fetched text
    }

    fetchArticle(); // call the async function
  }, [id]);

  return (
    <div>
      <ReactMarkdown>{articleText}</ReactMarkdown> {/* use the state variable here */}
    </div>
  )
}
