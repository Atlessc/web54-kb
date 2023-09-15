import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'; // import useState and useEffect
import '../styles/Article.css'
import { useStore } from 'zustand';

export default function ArticleText() {

  const { id } = useParams();
  const setArticleID = useStore(state => state.setArticleID);
  const [articleText, setArticleText] = useState(''); // add a state variable for the article text

  console.log(`Article ID from URL: {id}`); // log the article ID

  // set the article id from the useParams to the Article state in the useStore hook
  useEffect(() => {
    console.log(`Setting article ID in store: ${id}`); // log before setting the article ID
    setArticleID(id);
  }, [id, setArticleID]);

  useEffect(() => {
    async function fetchArticle() {
      console.log(`Fetching article: ${id}`); // log before fetching the article
      const response = await fetch(`/Articles/${id}`);
      const text = await response.text();
      console.log(`Fetched article text: ${text}`); // log the fetched text
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
