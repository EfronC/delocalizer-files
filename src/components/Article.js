import React from 'react';

const Article = ({ id, title, imageSrc, children }) => (
  <article id={id}>
    <h2 className="major">{title}</h2>
    <span className="image main">
      <img src={imageSrc} alt="" />
    </span>
    <p>{children}</p>
  </article>
);

export default Article;
