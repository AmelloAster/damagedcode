import type { FC } from 'react';
import NextLink from 'next/link';
import {
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import { HiTranslate } from 'react-icons/hi';

const langList = ['en', 'zh-CN'];

const I18nToggleButton: FC = () => {
  return (
    <Menu>
      <MenuButton>
        <Icon color={useColorModeValue('#000', '#fff')} as={HiTranslate} />
      </MenuButton>
      <MenuList>
        {langList.map(i => (
          <NextLink key={i} href="/" locale={i}>
            <MenuItem>{i}</MenuItem>
          </NextLink>
        ))}
      </MenuList>
    </Menu>
  );
};

export default I18nToggleButton;
