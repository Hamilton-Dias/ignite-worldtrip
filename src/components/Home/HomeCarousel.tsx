import Link from 'next/link'
import { Flex, Text, Box } from '@chakra-ui/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination]);


import 'swiper/swiper-bundle.min.css'

export function HomeCarousel() {
    return(
        <Box mb="50px">
            <Flex direction="column" align="center" justify="center" my="10">
                <Text fontSize="3xl">Vamos nessa?</Text>
                <Text fontSize="3xl">Então escolha seu continente</Text>
            </Flex>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination
            >
                <SwiperSlide>
                    <Link href="/europe">
                        <Flex backgroundImage="url(/images/slider/europe.png)" backgroundSize="cover" h={300} align="center" justify="center" direction="column" _hover={{"cursor": "pointer"}}>
                            <Text color="white" fontSize="2xl" fontWeight="bold">Europa</Text>
                            <Text color="white" fontSize="xl">o continente mais antigo</Text>
                        </Flex>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/europe">
                        <Flex backgroundImage="url(/images/slider/africa.jpeg)" backgroundSize="cover" h={300} align="center" justify="center" direction="column" _hover={{"cursor": "pointer"}}>
                            <Text color="white" fontSize="2xl" fontWeight="bold">Africa</Text>
                            <Text color="white" fontSize="xl">onde tudo começou</Text>
                        </Flex>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/europe">
                        <Flex backgroundImage="url(/images/slider/america.jpg)" backgroundSize="cover" h={300} align="center" justify="center" direction="column" _hover={{"cursor": "pointer"}}>
                            <Text color="white" fontSize="2xl" fontWeight="bold">America</Text>
                            <Text color="white" fontSize="xl">descrição do continente</Text>
                        </Flex>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/europe">
                        <Flex backgroundImage="url(/images/slider/asia.jpeg)" backgroundSize="cover" h={300} align="center" justify="center" direction="column" _hover={{"cursor": "pointer"}}>
                            <Text color="white" fontSize="2xl" fontWeight="bold">Asia</Text>
                            <Text color="white" fontSize="xl">descrição do continente</Text>
                        </Flex>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/europe">
                        <Flex backgroundImage="url(/images/slider/oceania.jpeg)" backgroundSize="cover" h={300} align="center" justify="center" direction="column" _hover={{"cursor": "pointer"}}>
                            <Text color="white" fontSize="2xl" fontWeight="bold">Oceania</Text>
                            <Text color="white" fontSize="xl">descrição do continente</Text>
                        </Flex>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </Box>
    );
}