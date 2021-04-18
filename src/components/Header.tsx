import { Flex, Image } from '@chakra-ui/react'

export function Header() {
    return(
        <Flex align="center" w="100%" justify="center" h="16">
            <Image src="/images/logo.png" alt="Logo" />
        </Flex>
    );
}