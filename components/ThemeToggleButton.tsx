import type { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IconButton, useColorModeValue, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggleButton: FC = () => {
  const { toggleColorMode } = useColorMode();

  const handleToggleColorMode = () => {
    toggleColorMode();
    const className = document.documentElement.className;
    if (!className) {
      document.documentElement.className = 'dark';
    } else {
      document.documentElement.className = '';
    }
  };

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{
          y: 20,
          opacity: 0
        }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={handleToggleColorMode}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
