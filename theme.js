import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
};

const theme = extendTheme({
  fonts: {
    heading: `"Inter", monospace`,
    body: `"Inter", monospace`,
  },
  config,
});

export default theme;
