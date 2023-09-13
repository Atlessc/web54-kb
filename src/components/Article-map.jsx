import { useState } from 'react';
import { Link } from "react-router-dom";
import articles from '../data/articles-map.json';
import '../styles/ToC.css'

function ArticlesMap() {
    const [showSection, setShowSection] = useState(Array(articles["Table of Contents"].length).fill(false));

    return (
        <div className="table-of-content">
            
            <h1>Articles</h1>
            <p>Welcome to the articles page</p>
            <div className="articles-list">
                {articles["Table of Contents"].map((section, index) => (
                    <div className="SectionTitle lv1-section-title" key={section.SectionTitle}>
                        <h2 onClick={() => {
                            const newShowSection = [...showSection];
                            newShowSection[index] = !newShowSection[index];
                            setShowSection(newShowSection);
                        }}>{section.SectionTitle} <span className={showSection[index] ? "up" : "down"}>^</span></h2>
                        {showSection[index] && section.Items.map(item => (
                            item.pageID ? (
                                <Link key={item.pageID} to={`/article/${item.pageID}.md`}>
                                    <div className="item lv1-item">{item.pageTitle}</div>
                                </Link>
                            ) : (
                                <div className="lv2-section-title" key={item.SectionTitle}>
                                    <h3>{item.SectionTitle}</h3>
                                    {item.Items.map(subItem => (
                                        subItem.pageID ? (
                                            <Link key={subItem.pageID} to={`/articles/${subItem.pageID}`}>
                                                <div className="item lv2-item">{subItem.pageTitle}</div>
                                            </Link>
                                        ) : (
                                            <div className="lv3-section-title" key={subItem.SectionTitle}>
                                                <h4>{subItem.SectionTitle}</h4>
                                                {subItem.Items.map(subSubItem => (
                                                    subSubItem.pageID ? (
                                                        <Link key={subSubItem.pageID} to={`/articles/${subSubItem.pageID}`}>
                                                            <div className="item lv3-item">{subSubItem.pageTitle}</div>
                                                        </Link>
                                                    ) : null
                                                ))}
                                            </div>
                                        )
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

export default ArticlesMap;
