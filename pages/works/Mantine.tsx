import type { NextPage } from 'next';

import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '@components/Work';
import P from '@components/Paragraph';
import Article from '@components/layouts/Article';

const Work: NextPage = () => {
  return (
    <Article title="Mantine">
      <Container>
        <Title>
          Mantine <Badge>2022</Badge>
        </Title>
        <P>A fully featured React components library</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link className="ml-2" href="https://mantine.dev/">
              https://mantine.dev/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link className="ml-2" href="https://github.com/mantinedev/mantine">
              Github <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span className="ml-2">React, Nextjs </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span className="ml-2">
              React, Typescript, Storybook, @emotion, Gastby, Remix, Vite,
              Nextjs
            </span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/mantine_01.png" alt="Mantine" />
        <WorkImage src="/images/works/mantine_02.webp" alt="Mantine" />
      </Container>
    </Article>
  );
};

export default Work;
