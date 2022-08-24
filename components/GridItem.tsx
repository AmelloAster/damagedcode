import type { FCC } from '@#/react';
import NextLink from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';

export const GridItem: FCC<{
  href: string;
  title: string;
  thumbnail: StaticImageData;
}> = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="rounded-xl"
        placeholder="blur"
        loading="lazy"
        blurDataURL="https://images.unsplash.com/photo-1661159666707-7fcc4874d16b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80"
      />
      <LinkOverlay href={href} isExternal={true}>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem: FCC<{
  id: string;
  title: string;
  thumbnail: StaticImageData;
}> = ({ children, title, id, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="rounded-xl"
          placeholder="blur"
          blurDataURL="https://images.unsplash.com/photo-1661159666707-7fcc4874d16b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);
