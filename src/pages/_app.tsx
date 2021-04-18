import { AppProps } from 'next/app'

import { ChakraProvider, Box } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
        <Header />
        <Box h="100vh">
          <Component {...pageProps} />
        </Box>
    </ChakraProvider>
  )
}

export default MyApp
