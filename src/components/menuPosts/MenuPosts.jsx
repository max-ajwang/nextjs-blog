import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './menuPosts.module.css';

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.technology}`}>
            Technology
          </span>
          <h3 className={styles.postTitle}>
            If you have read books on Greek mythology
          </h3>
          <div className={styles.detail}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.date}> - 28.11.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>Coding</span>
          <h3 className={styles.postTitle}>
            If you have read books on Greek mythology
          </h3>
          <div className={styles.detail}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.date}> - 28.11.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.cyberSecurity}`}>
            Cyber Security
          </span>
          <h3 className={styles.postTitle}>
            If you have read books on Greek mythology
          </h3>
          <div className={styles.detail}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.date}> - 28.11.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.finance}`}>
            Finance
          </span>
          <h3 className={styles.postTitle}>
            If you have read books on Greek mythology
          </h3>
          <div className={styles.detail}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.date}> - 28.11.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fitness}`}>
            Fitness
          </span>
          <h3 className={styles.postTitle}>
            If you have read books on Greek mythology
          </h3>
          <div className={styles.detail}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.date}> - 28.11.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
