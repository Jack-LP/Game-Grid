import React, { useRef } from 'react';
import {
  Box,
  Container,
  Input,
  Flex,
  Button,
  Image,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import gameGridLogo from './img/gameGridLogo.svg';
import gameGridLogoSmall from './img/gameGridLogoSmall.svg';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box
      bg='#1c1f2390'
      shadow='lg'
      position='fixed'
      zIndex='1'
      width='100%'
      top='0'
      backdropFilter='auto'
      backdropBlur='8px'
    >
      <Container
        display='flex'
        alignItems='center'
        maxW={['90vw', null, null, '1200px']}
        paddingInline='0'
        paddingBlock='3'
      >
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent backgroundColor='charcoal.700'>
            <DrawerHeader>
              {' '}
              <DrawerCloseButton />
            </DrawerHeader>
            <DrawerBody>
              <Flex gap='4' direction='column' alignItems='center' p='4'>
                <Image maxW='300px' src={gameGridLogo} p='2' />
                <Input
                  placeholder='Search'
                  focusBorderColor='purple.700'
                  variant='filled'
                  rounded='full'
                />
                <Link to='/'>
                  <Button variant='ghost'>Home</Button>
                </Link>
                <Link to='/browse'>
                  <Button variant='ghost'>Browse</Button>
                </Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Flex gap='4' mr='auto' display={['none', null, null, 'flex']}>
          <Link to='/'>
            <Button variant='ghost' display={['none', null, null, 'block']}>
              Home
            </Button>
          </Link>
          <Link to='/browse'>
            <Button variant='ghost' display={['none', null, null, 'block']}>
              Browse
            </Button>
          </Link>
        </Flex>
        <Link to='/'>
          <Image
            display={['none', null, null, 'block']}
            maxW='300px'
            src={gameGridLogo}
          />
          <Image
            display={['block', null, null, 'none']}
            w='50px'
            h='50px'
            src={gameGridLogoSmall}
          />
        </Link>
        <IconButton
          ref={btnRef}
          onClick={onOpen}
          display={['flex', null, null, 'none']}
          icon={<HamburgerIcon />}
          alignItems='center'
          justifyContent='center'
          fontSize='25px'
          marginLeft='auto'
        />
        <Input
          ml='auto'
          width='200px'
          placeholder='Search'
          focusBorderColor='purple.700'
          variant='filled'
          rounded='full'
          display={['none', null, null, 'block']}
        />
      </Container>
    </Box>
  );
};

export default Navbar;
