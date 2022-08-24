import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@components/layouts/Main';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Fonts from '../components/Fonts';
import theme from '../lib/theme';
import { AnimatePresence } from 'framer-motion';
import { appWithTranslation } from 'next-i18next';

import '../styles/globals.css';
import '../styles/weather-3d-icons.scss';

const Website: NextPage<AppProps> = ({
  Component,
  pageProps,
  router
}: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};

export default appWithTranslation(Website) as NextPage;
