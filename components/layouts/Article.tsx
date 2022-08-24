import type { FCC } from '@#/react';
import { motion } from 'framer-motion';
import Head from 'next/head';

const variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 20
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0
  },
  exit: {
    opacity: 0,
    x: 0,
    y: 20
  }
};

const Article: FCC<{ title: string }> = ({ children, title }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <title>{title} - DamagedCode</title>
          </Head>
        )}
        {children}
      </>
    </motion.article>
  );
};

export default Article;