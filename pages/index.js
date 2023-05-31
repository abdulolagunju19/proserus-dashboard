import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import { Flex, Heading, Text, Button, Stack, Link } from '@chakra-ui/react';
import Container from '@/components/Container';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Container>
        <Flex direction="column" justify="center" align="center">
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
        >
          Wayfinders Dashboard
        </Heading>
        <Image
          src="/indexpic.png"
          alt="Photo"
          width={280}
          height={280}
          priority
          className="next-image"
        />
      </Flex>
    </Container>
    </>
  )
}


