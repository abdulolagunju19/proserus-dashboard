import NextLink from 'next/link';
import { useColorModeValue, Button, Flex } from '@chakra-ui/react';
import { signIn } from 'next-auth/react'

import ThemeToggle from './theme-toggle';

export default function Header() {
  const bgColor = useColorModeValue('white', 'gray.900');

  //header is on home page with login button
  //google authentication for user sign in with next-auth
  return (
    <Flex
      pos="fixed"
      as="header"
      align="center"
      justify="center"
      top={0}
      insetX={0}
      h={16}
      px={[4, 6, null, 8]}
      bg={bgColor}
      borderBottomWidth="1px"
    >
      <Flex w="full" align="center" justify="center">
        <Flex w="full" maxW="5xl" align="center" justify="center">
          <Flex w="full" align="center" justify="space-between">
            <Flex align="center">
              <NextLink href="/" passHref>
                  <Button variant="ghost" p={2} fontWeight="bold">
                    Home
                  </Button>
                </NextLink>
                <Button 
                  variant="ghost" 
                  p={2} 
                  fontWeight="bold" 
                  onClick={() => {
                    signIn('google', { callbackUrl: "/dashboard"})
                  }}
                >
                  Sign In
                </Button>
            </Flex>
            <Flex>
              <ThemeToggle />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
