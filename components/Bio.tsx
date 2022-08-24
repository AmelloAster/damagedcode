import { Box } from '@chakra-ui/react';
import type { FCC } from '@#/react';

export const BioSection: FCC = ({ children }) => (
  <Box className=" pl-[3.4em] indent-[-3.4em]">{children}</Box>
);

export const BioYear: FCC = ({ children }) => (
  <span className="font-bold mr-[1em]">{children}</span>
);
