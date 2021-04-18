import { Box, Divider } from '@chakra-ui/react'
import { Banner } from "../components/Home/Banner"
import { IconsSection } from "../components/Home/IconsSection"
import { HomeCarousel } from "../components/Home/HomeCarousel"

export default function Home() {
  return (
    <Box h="100vh" w="100%">
      <Banner />
      <IconsSection />
      <Divider maxW="100px" h="5px" bg="gray.500" margin="0 auto" />
      <HomeCarousel />
    </Box>
  )
}
