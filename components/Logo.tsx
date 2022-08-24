import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';

import { Text, useColorModeValue } from '@chakra-ui/react';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transition: all 0.3s;
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  const logoImg = `/images/52hz${useColorModeValue('', '-dark')}.svg`;

  return (
    <Link href="/">
      <a className="flex ">
        <LogoBox>
          <div className="w-[20px] h-[20px] relative">
            <div className="w-[40px] h-[40px] absolute top-[-10px]">
              <Image src={logoImg} width={40} height={40} alt="logo" />
            </div>
          </div>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={6}
          >
            Amello Aster
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
