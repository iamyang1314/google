import Head from 'next/head'
import Search from '../components/Search'
import Collect from '../components/Collect'
import { VStack, Box, Image } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box mt="150px">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack spacing={30}>
        <Image src="/google_logo.svg" alt="Google Logo" />
        <Search/>
        <Collect/>
      </VStack>
    </Box>
  )
}
