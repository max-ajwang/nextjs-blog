import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey there, MaxTheCTO here</b> Discover my stories and creative ideas
        here
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Blog SEO: How to Search Engine Optimize Your Blog Content
          </h1>
          <p className={styles.postDesc}>
            Discover on-page SEO tips to optimize your blog content to make it
            organically rank and easily searchable.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
