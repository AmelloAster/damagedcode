import type { NextPage } from 'next';
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  Icon,
  SimpleGrid,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Section from '@components/Section';
import Paragraph from '@components/Paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '@components/Bio';
import DailyQuotes from '@components/DailyQuotes';
import Article from '@components/layouts/Article';
import { GridItem } from '@components/GridItem';
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoStackoverflow
} from 'react-icons/io5';

import next_snp_01 from '@public/images/works/next_snp_01.gif';

const iconList = [
  {
    icon: IoLogoGithub,
    href: 'https://github.com/AmelloAster'
  },
  {
    icon: IoLogoInstagram,
    href: 'https://www.instagram.com/amelloaster69/'
  },
  {
    icon: IoLogoStackoverflow,
    href: 'https://www.instagram.com/amelloaster69/'
  }
];

export const Page: NextPage = () => {
  return (
    <Article title="">
      <Container>
        <Box
          display="flex"
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          alignItems="center"
        >
          <DailyQuotes />
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Amello Aster
            </Heading>
            <p>Digital Craftzman (Artist / Developer / Designer)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <div className="border-2 border-solid w-[100px] h-[100px] overflow-hidden rounded-full  border-white inline-block">
              <div className="w-[160px] relative left-[-10px] top-[-10px]">
                <Image src="/images/damagedCode.jpeg" alt="Profile Image" />
              </div>
            </div>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            AmelloAster is a freelancer and a full-stack developer working in
            Chongqing. She is passionate about exploring different technical
            areas and building the digital services she wants. She has a knack
            for being on top of all the things that go into launching a product,
            from planning and design all the way to solving real problems with
            code. To solving real life problems with code. When not online, she
            likes to create paintings with her drawing board.{' '}
            <NextLink href="/works/ClashComet">
              <Link>ClashComet</Link>
            </NextLink>
            .
          </Paragraph>
          <Box textAlign="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <BioSection>
            <BioYear>1996</BioYear>
            Born in ChongQing （重庆）, China.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I <span className="text-blue dark:text-yellow-400 ">❤</span>
          </Heading>
          <Paragraph>
            Art，Music，
            <Link href="https://www.instagram.com/amelloaster69/">Drawing</Link>
            ，Photography，DND，Learning，Coding，Reading，Comic
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            {iconList.map(i => (
              <ListItem key={i.href}>
                <Link href={i.href} isExternal={true}>
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={i.icon} />}
                  >
                    @AmelloAster
                  </Button>
                </Link>
              </ListItem>
            ))}
          </List>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="React and Next.js Snippets"
              thumbnail={next_snp_01}
              href="http://react-next-snippets.co/"
            />
          </SimpleGrid>
          <Box textAlign="center" my={4}>
            <NextLink href="/posts">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Popular Posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Article>
  );
};

export default Page;
