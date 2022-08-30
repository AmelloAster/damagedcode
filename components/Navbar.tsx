import type { FCC } from '@#/react';
import { useMemo } from 'react';
import NextLink from 'next/link';

import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Icon
} from '@chakra-ui/react';
import { IoLogoGithub } from 'react-icons/io5';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './ThemeToggleButton';
import I18nToggleButton from './I18nToggleButton';
import { useTranslation } from 'next-i18next';

import Logo from './Logo';

const LinkItem: FCC<{ href: string; path: string }> = ({
  href,
  path,
  children
}) => {
  const active = useMemo(() => path === href, [href, path]);
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900');

  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#0E0D14' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const NavBar: FCC<{ path: string }> = props => {
  const { path } = props;
  const { t } = useTranslation('common');

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#0E0D1480')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          gap={2}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/works" path={path}>
            {t('works')}
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            {t('posts')}
          </LinkItem>
          <Link
            href="https://github.com/AmelloAster/damagedcode"
            isExternal={true}
            color={useColorModeValue('"#0E0D14"', 'whiteAlpha.900')}
            className="flex items-center gap-2"
          >
            <Icon as={IoLogoGithub} /> {t('source')}
          </Link>
        </Stack>
        <Box flex={1} textAlign="end">
          <Box display="flex" gap={4}>
            <I18nToggleButton />
            <ThemeToggleButton />
          </Box>
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>{t('about')}</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}> {t('works')}</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}> {t('posts')}</MenuItem>
                </NextLink>
                <NextLink
                  href="https://github.com/AmelloAster/damagedcode"
                  passHref
                >
                  <MenuItem as={Link}>{t('vSource')}</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
