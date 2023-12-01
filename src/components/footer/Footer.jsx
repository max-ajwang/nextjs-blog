import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Max Ajwang" width={50} height={50} />
          <h1 className={styles.logoText}>Max Ajwang'</h1>
        </div>
        <p className={styles.desc}>
          Whether you're seeking a collaborative partner, exploring
          opportunities for consultation, or simply want to dive into the world
          of IT systems, I'm just a message away. Let's connect and explore the
          possibilities. Thank you for visiting my IT Oasis. Together, let's
          harness the power of technology to shape a future where systems are
          not just functional but exceptional. 🚀💻
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Technology</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Cyber Security</Link>
          <Link href="/">Finance</Link>
          <Link href="/">Fitness</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social Media</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">YouTube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
