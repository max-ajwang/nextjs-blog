import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>1.12.2023 - </span>
          <span className={styles.category}>TECHNOLOGY</span>
        </div>
        <Link href="/">
          <h1>The Three Tech Projects You Meet in Hell</h1>
        </Link>
        <p className={styles.desc}>
          If you’ve read even a children’s book about Greek mythology, one thing
          that will stand out is how often the Greek gods punished people.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
