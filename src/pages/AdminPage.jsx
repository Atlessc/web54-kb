import React, { useState } from 'react';
import TextToJson from "../components/admin/TextToJSON.jsx"
import ArticleObjectGenerator from "../components/admin/ArticleObjectGenerator.jsx"
import '../styles/Admin.css';

export default function AdminPage() {
  const [showComponent, setShowComponent] = useState('TextToJson');

  const handleSwitch = () => {
    setShowComponent(showComponent === 'TextToJson' ? 'ArticleObjectGenerator' : 'TextToJson');
  }

  return (
    <div className="admin-container">
      <h1>Admin Page</h1>
      <button onClick={handleSwitch}>Switch Component</button>
      {showComponent === 'TextToJson' && <TextToJson />}
      {showComponent === 'ArticleObjectGenerator' && <ArticleObjectGenerator />}
    </div>
  )
}
