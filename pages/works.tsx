import type { NextPage } from 'next';

import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '@components/Section';
import { WorkGridItem } from '@components/GridItem';

import clashThumbnail from '../public/images/works/clash.webp';
import nextSnpThumbnail from '../public/images/works/next_snp_01.gif';
import mantineThumbnail from '../public/images/works/mantine_01.png';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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
      </SimpleGrid>
      <Heading as="h3" fontSize={20} mb={4}>
        Collaborations
      </Heading>
      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="ReactAndNextSnippets"
            title="React and Next.js Snippets"
            thumbnail={nextSnpThumbnail}
          >
            React and Next.js Snippets with TypeScript support as well!🚀
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="Mantine"
            title="Mantine"
            thumbnail={mantineThumbnail}
          >
            A fully featured React components library
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};
export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
});

export default Works;
