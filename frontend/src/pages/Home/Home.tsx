import React from 'react';
import styles from './Home.module.sass';
import TagsAside from '../../components/TagsAside/TagsAside'
import PostsList from '../../components/PostsList/PostsList'

import {createPost, getPosts, getPost, updatePost, replacePost, deletePost} from '../../http/axios'

export const Home = () => {

  const onClickCreatePost = async () => {
    const response = await createPost( 'body111111111111', 'title')
    console.log('HANDLER: ', response)
  }

  const onClickGetAllPosts = async () => {
    const response = await getPosts( 2, 1 )
    console.log('HANDLER: ', response)
  }

  const onClickGetOnePost = async () => {
    const response = await getPost( '63cfe551dc6175fe2681529c' )
    console.log('HANDLER: ', response)
  }

  const onClickUpdatePost = async () => {
    const response = await updatePost( '63cfe551dc6175fe2681529c', 'body111111222222222', 'title111211111')
    console.log('HANDLER: ', response)
  }

  const onClickReplacePost = async () => {
    const response = await replacePost( '63cfe551dc6175fe2681529c', 'body111111222222222', 'title111211111')
    console.log('HANDLER: ', response)
  }

  const onClickDeletePost = async () => {
    const response = await deletePost( '63cfe551dc6175fe2681529c')
    console.log('HANDLER DONE')
    console.log(response)
    console.log('HANDLER DONE')
  }


  return (
    <div className={styles.wrapper}>
      <button onClick={() => onClickCreatePost()}> CREATE POST DEBUG </button>
      <button onClick={() => onClickGetAllPosts()}> GET ALL POSTS DEBUG </button>
      <button onClick={() => onClickGetOnePost()}> GET ONE POST DEBUG </button>
      <button onClick={() => onClickUpdatePost()}> UPDATE ONE POST DEBUG </button>
      <button onClick={() => onClickUpdatePost()}> REPLACE ONE POST DEBUG </button>
      <button onClick={() => onClickDeletePost()}> DELETE ONE POST DEBUG </button>
      <section className={styles.content}> 
        <PostsList />
      </section>
      <aside className={styles.sidebar}> 
        <TagsAside />
      </aside>
      
    </div>);
};
