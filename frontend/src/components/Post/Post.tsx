import React, { FC } from 'react';
import styles from './Post.module.sass';

interface IPostProps {
  postId: number;
}

const Post: FC<IPostProps> = ({ postId }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Post ID: {postId}</h2>
    </div>
  );
};

export default Post;
