import React from 'react';
import './pic.css';

const Article = ({ imgUrl, name }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{name}</p>
      </div>
    </div>
  </div>
);

export default Article;