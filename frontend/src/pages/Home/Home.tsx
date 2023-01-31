import React, { useEffect } from 'react';
import styles from './Home.module.sass';
import TagsAside from '../../components/TagsAside/TagsAside'
import PostsList from '../../components/PostsList/PostsList'

import { fetchPosts } from '../../redux/slices/postsSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';

export const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchPosts())
  }, [])



  return (
    <main className={styles.wrapper}>
      <section className={styles.content}> 
        <PostsList />
      </section>
      <aside className={styles.sidebar}> 
        <TagsAside />
      </aside>
      
    </main>);
};
