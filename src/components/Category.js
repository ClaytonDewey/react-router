import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categoriesSlice';
import { selectArticles } from '../features/articles/articlesSlice';
import { Link, useParams } from 'react-router-dom';

const Category = () => {
  const categories = useSelector(selectCategories);
  const articles = useSelector(selectArticles);

  const { name } = useParams();

  return (
    <main>
      <h2>Articles Related to {name}</h2>
      <ul>
        {categories[name].map((articleSlug) => (
          <li>
            <Link to={`/articles/${articleSlug}`}>{articles[articleSlug]}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Category;