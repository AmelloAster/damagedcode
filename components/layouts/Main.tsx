import type { FCC } from '@#/react';
import Head from 'next/head';
import type { NextRouter } from 'next/router';
import NavBar from '../Navbar';
import { Box, Container } from '@chakra-ui/react';
import SunLight from '@components/weather-3d-icons/SunLight';

const Main: FCC<{ router: NextRouter }> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>AmelloAster - Life is a flower over on death</title>
        <meta name="author" content="Amello Aster" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <SunLight />
        {children}
      </Container>
    </Box>
  );
};

export default Main;
