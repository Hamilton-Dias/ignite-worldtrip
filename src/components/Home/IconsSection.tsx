import { Flex, SimpleGrid, Image, Box, Text } from '@chakra-ui/react'

export function IconsSection() {
    return(
        <Flex align="center" justify="center" w="100%" maxW={1480} minH={280} p="4">
            <SimpleGrid spacing={[10, 20]} columns={[2, 5]}>
                <Flex direction="column" justify="center" align="center">
                    <Image src="/images/icons/cocktail.svg" alt="Coquetel" mb={5} w="70px"/>
                    <Text fontWeight="bold">vida noturna</Text>
                </Flex>

                <Flex direction="column" justify="center" align="center">
                    <Image src="/images/icons/surf.svg" alt="Coquetel" mb={5} w="70px" />
                    <Text fontWeight="bold">praia</Text>
                </Flex>

                <Flex direction="column" justify="center" align="center">
                    <Image src="/images/icons/building.svg" alt="Coquetel" mb={5} w="70px" />
                    <Text fontWeight="bold">moderno</Text>
                </Flex>

                <Flex direction="column" justify="center" align="center">
                    <Image src="/images/icons/museum.svg" alt="Coquetel" mb={5} w="70px" />
                    <Text fontWeight="bold">clássico</Text>
                </Flex>

                <Flex direction="column" justify="center" align="center">
                    <Image src="/images/icons/earth.svg" alt="Coquetel" mb={5} w="70px" />
                    <Text fontWeight="bold">e mais...</Text>
                </Flex>
            </SimpleGrid>
        </Flex>
    );
}