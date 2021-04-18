import { Box } from '@chakra-ui/react'
import { Banner } from "../components/Home/Banner"
import { IconsSection } from "../components/Home/IconsSection"

export default function Home() {
  return (
    <Box h="100vh" w="100%">
      <Banner />
      <IconsSection />
    </Box>
  )
}
