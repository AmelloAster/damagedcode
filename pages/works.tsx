import type { NextPage } from 'next';

import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '@components/Section';
import { WorkGridItem } from '@components/GridItem';

import clashThumbnail from '../public/images/works/clash.webp';
import nextSnpThumbnail from '../public/images/works/next_snp.png';

const Works: NextPage = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="ClashComet"
            title="ClashComet"
            thumbnail={clashThumbnail}
          >
            A Clash GUI build with Tauri
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="ReactAndNextSnippets"
            title="React and Next.js Snippets"
            thumbnail={nextSnpThumbnail}
          >
            React and Next.js Snippets with TypeScript support as well!🚀
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
