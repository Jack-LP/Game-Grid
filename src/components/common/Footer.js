import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Flex
      bg='charcoal.800'
      shadow='lg'
      width='100%'
      justify='center'
      align='center'
      mt='8'
    >
      <Text color='whiteAlpha.400' p='2'>
        ✦ Made with{' '}
        {
          <Link href='https://reactjs.org/' isExternal>
            <FontAwesomeIcon icon={faReact} />
          </Link>
        }{' '}
        by {''}
        {
          <Link href='https://github.com/jack-lp' isExternal>
            Jack-LP
          </Link>
        }{' '}
        ✦
      </Text>
    </Flex>
  );
};

export default Footer;
