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
            <li key={path.path}>
              <Link to={path.path}> {path.name} </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
