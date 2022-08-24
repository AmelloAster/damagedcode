import type { FCC } from '@#/react';
import NextLink from 'next/link';
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export const Title: FCC = ({ children }) => {
  return (
    <Box>
      <NextLink href="/works">
        <Link>Works</Link>
      </NextLink>
      <span>
        &nbsp;
        <ChevronRightIcon />
        &nbsp;
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  );
};

export const WorkImage: FCC<{ src: string; alt: string }> = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

export const Meta: FCC = ({ children }) => (
  <Badge colorScheme="green">{children}</Badge>
);
