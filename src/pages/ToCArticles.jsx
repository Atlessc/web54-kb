import { useState } from 'react';
import { Link } from "react-router-dom";
import articles from './articles.json';
import '../styles/ToC.css'

function Articles() {
    const [showSection, setShowSection] = useState(Array(articles["Table of Contents"].length).fill(false));

    return (
        <div className="table-of-content">
            <h1>Articles</h1>
            <p>Welcome to the articles page</p>
            <div className="articles-list">
                {articles["Table of Contents"].map((section, index) => (
                    <div className="SectionTitle" key={section.SectionTitle}>
                        <h2 onClick={() => {
                            const newShowSection = [...showSection];
                            newShowSection[index] = !newShowSection[index];
                            setShowSection(newShowSection);
                        }}>{section.SectionTitle} <span className={showSection[index] ? "up" : "down"}>^</span></h2>
                        {showSection[index] && section.Items.map(item => (
                            item.pageID ? (
                                <Link className="" key={item.pageID} to={`/articles/${item.pageID}`}>
                                    <div className="item">{item.pageTitle}</div>
                                </Link>
                            ) : (
                                <div key={item.SectionTitle}>
                                    <h3>{item.SectionTitle}</h3>
                                    {item.Items.map(subItem => (
                                        subItem.pageID ? (
                                            <Link key={subItem.pageID} to={`/articles/${subItem.pageID}`}>
                                                <div className="item">{subItem.pageTitle}</div>
                                            </Link>
                                        ) : null
                                    ))}
                                </div>
                            )
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Articles;
