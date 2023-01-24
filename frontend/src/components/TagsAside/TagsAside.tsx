import React, { FC } from 'react';
import styles from './TagsAside.module.sass';

interface ITagsAside {
}

const TagsAside: FC<ITagsAside> = () => {
  return (
  	<section className={styles.wrapper}> <h1>tags</h1> </section>
  );
};

export default TagsAside;
