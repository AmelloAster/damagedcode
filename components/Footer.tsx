import type { FC } from 'react';

import { Box, useColorModeValue } from '@chakra-ui/react';

const Footer: FC = () => {
  return (
    <Box
      textAlign="center"
      color={useColorModeValue('blackAlpha.500', 'whiteAlpha.500')}
    >
      © 2022 Amello Aster. All Rights Reserved.
    </Box>
  );
};

export default Footer;
