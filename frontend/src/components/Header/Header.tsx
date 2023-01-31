import React from 'react';
import styles from './Header.module.sass';
import {Link} from 'react-router-dom'

const paths = [
  {path: '/', name: "Домашняя страница"},
  {path: '/user', name: "Профиль"},
]

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <nav>
        <ul>
          {paths.map((path) => (
            <Link to={path.path}> 
            <li key={path.path}>
              {path.name} 
            </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};
