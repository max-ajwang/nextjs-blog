import Menu from '@/components/menu/Menu';
import styles from './singlePage.module.css';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Blog SEO: How to Search Engine Optimize Your Blog Content
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Max Ajwang'</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Discover on-page SEO tips to optimize your blog content to make it
              organically rank and easily searchable.
            </p>
            <h2>Why does blogging improve search engine optimization?</h2>
            <p>
              56% of surveyed consumers have made a purchase from a company
              after reading their blog and 10% of marketers who use blogging say
              it generates the biggest return on investment. If you're writing a
              blog for a business, those stats make blog SEO a pretty big deal.
              Even if you're blogging just for fun, SEO can help you boost your
              message and connect with more engaged readers. But what is blog
              SEO? And how can you optimize your blog for search engines? Get
              ready for an in-depth exploration into the world of keywords,
              backlinks, and content optimization.
            </p>
            <p>
              Blog SEO is the practice of creating and updating a blog to
              improve search engine rankings. This approach usually includes
              keyword research, link building, image optimization, and content
              writing. Does blogging help with SEO? Blogging helps boost SEO
              quality by positioning your website as a relevant answer to your
              customers' questions. Blog posts that use a variety of on-page SEO
              tactics can give you more opportunities to rank in search engines
              and make your site more appealing to visitors. When you optimize
              your web pages — including your blog posts — you're making your
              website more visible to people who are using search engines (like
              Google) to find your product or service. But does your blog
              content really help your business organically rank on search
              engines?
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
