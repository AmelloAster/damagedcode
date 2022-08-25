import type { NextPage } from 'next';

import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '@components/Work';
import P from '@components/Paragraph';
import Article from '@components/layouts/Article';

const Work: NextPage = () => {
  return (
    <Article title="React and Next.js Snippets">
      <Container>
        <Title>
          React and Next.js Snippets <Badge>2021</Badge>
        </Title>
        <P>
          🔌 A VSCode extension packed with the latest React and Next.js
          snippets
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link className="ml-2" href="http://react-next-snippets.co/">
              http://react-next-snippets.co/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              className="ml-2"
              href="https://marketplace.visualstudio.com/items?itemName=AvneeshAgarwal.react-nextjs-snippets"
            >
              VSCode extension <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span className="ml-2">Vscode, Vim, Neovim, Atom</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span className="ml-2">JavaScript, Vscode, Shelljs</span>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/next_snp.png"
          alt="React and Next.js Snippets"
        />
        <WorkImage
          src="/images/works/next_snp_01.gif"
          alt="React and Next.js Snippets"
        />
      </Container>
    </Article>
  );
};

export default Work;
