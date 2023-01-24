import React, { FC } from 'react';
import styles from './PostsList.module.sass';
import Post from '../Post/Post'


interface IPostsListProps {
}



const PostsList: FC<IPostsListProps> = () => {
  return (
    <div className={styles.wrapper}>
        <Post /> 
        <Post /> 
        <Post /> 
        <Post /> 
        <Post /> 
        <Post /> 
        <Post /> 
        <Post /> 
    </div>
  );
};

export default PostsList;
