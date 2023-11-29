import Link from 'next/link';
import React from 'react';
import styles from './menuCategories.module.css';

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.technology}`}
      >
        Technology
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.coding}`}
      >
        Coding
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.cyberSecurity}`}
      >
        Cyber Security
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.finance}`}
      >
        Finance
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.fitness}`}
      >
        Fitness
      </Link>
    </div>
  );
};

export default MenuCategories;
