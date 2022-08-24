import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Article from '@components/layouts/Article';
import Section from '@components/Section';
import { GridItem } from '@components/GridItem';

import Self_Taught_Story from '@public/images/posts/Self_Taught_Story.webp';
import AppleMusic_vs_Spotify from '@public/images/posts/AppleMusic_vs_Spotify.webp';
import Bit_Obsessive from '@public/images/posts/Bit_Obsessive.jpeg';
import How_JavaScript_Works from '@public/images/posts/How_JavaScript_Works.jpeg';

const Posts = () => (
  <Article title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Tips for Aspiring Developers (Self-Taught Story)"
            thumbnail={Self_Taught_Story}
            href="https://juejin.cn/post/6844903656349761550"
          />
          <GridItem
            title="UX analysis: Apple Music vs. Spotify’s artist page"
            thumbnail={AppleMusic_vs_Spotify}
            href="https://juejin.cn/post/6997657180128149517"
          />
          <GridItem
            title="Why All Coding is a Little Bit Obsessive"
            thumbnail={Bit_Obsessive}
            href="https://juejin.cn/post/6996117810036342791"
          />
          <GridItem
            title="How JavaScript Works"
            thumbnail={How_JavaScript_Works}
            href="https://juejin.cn/post/6995093429227094053"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Article>
);

export default Posts;
