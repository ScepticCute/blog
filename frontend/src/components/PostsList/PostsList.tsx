import React, { FC } from 'react';
import styles from './PostsList.module.sass';

interface IPostsListProps {
  postId: number;
}

const PostsList: FC<IPostsListProps> = ({ postId }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Post ID: {postId}</h2>
    </div>
  );
};

export default PostsList;
