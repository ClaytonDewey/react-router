import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categoriesSlice';
import { selectArticles } from '../features/articles/articlesSlice';
import { Link, useParams } from 'react-router-dom';

const Category = () => {
  const categories = useSelector(selectCategories);
  const articles = useSelector(selectArticles);

  const { name } = useParams();
  console.log(name)
  return (
    <div>
      <h2>Articles Related to {name}</h2>
      <ul>
        { categories[name].map(articleSlug => (
          <li>
            <Link to={`/articles/${articleSlug}`}>{articles[articleSlug].title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
