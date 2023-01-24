import React, { FC } from 'react';
import styles from './Post.module.sass';

interface IPostProps {
  postId?: number;
}

const Post: FC<IPostProps> = ({ postId }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Post title</h2>
      <p> Post content </p>
    </div>
  );
};

export default Post;
