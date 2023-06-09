import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectArticles,
  filterArticles,
} from '../features/articles/articlesSlice';
import Search from './Search';

import { Link, useSearchParams } from 'react-router-dom';

const Articles = () => {
  const articles = useSelector(selectArticles);

  const [searchParms, setSearchParms] = useSearchParams();

  // Get the queryParams from the object returned from useSearchParams and set to `title`
  const title = searchParms.get('title');

  const filteredArticles = title
    ? filterArticles(title, articles)
    : Object.values(articles);

  return (
    <main>
      <h1>Articles</h1>
      <ul>
        {filteredArticles.map((article) => (
          <li key={article.slug}>
            <Link to={`${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <Search />
    </main>
  );
};

export default Articles;
