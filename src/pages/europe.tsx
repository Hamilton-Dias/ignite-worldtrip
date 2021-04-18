import { Box, Flex, Image, SimpleGrid, Text, Tooltip } from '@chakra-ui/react'

export default function Europe() {
    return(
        <Box h="100vh" w="100%">
            <Flex w="100%" align="left" justify="flex-end" backgroundImage="url(/images/slider/europe.png)" backgroundSize="cover" maxW={1480} direction="column" h={250}>
                <Text color="white" fontSize="3xl" fontWeight="bold" p="4">Europa</Text>
            </Flex>

            <Flex align="center" justify="space-between" direction={["column", "row"]} w="100%" p="6">
                <Text display="flex" flex="1" align="justify">A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>

                <SimpleGrid columns={3} spacing="6">
                    <Flex direction="column" justify="center" align="center">
                        <Text color="yellow.500" fontWeight="bold" fontSize="4xl">50</Text>
                        <Text fontWeight="bold">países</Text>
                    </Flex>

                    <Flex direction="column" justify="center" align="center">
                        <Text color="yellow.500" fontWeight="bold" fontSize="4xl">60</Text>
                        <Text fontWeight="bold">línguas</Text>
                    </Flex>

                    <Flex direction="column" justify="center" align="center">
                        <Text color="yellow.500" fontWeight="bold" fontSize="4xl">27</Text>
                        <Text fontWeight="bold">
                            cidades +100
                            <Tooltip label="Cidades mais visitadas desse continente" aria-label="tooltip">
                                <Image src="/images/info.svg" alt="info" display="inline-block" height="16px" ml="3px" mb="2px" />
                            </Tooltip>
                        </Text>
                    </Flex>
                </SimpleGrid>
            </Flex>

            <Flex align="left" justify="space-between" direction="column" w="100%" p="6">
                <Text fontSize="4xl" fontWeight="bold" mb="8" >Cidades +100</Text>

                <SimpleGrid columns={[1, 4]} spacing="10">
                    <Flex direction="column" justify="center" align="center" border="1px solid yellow.500" w="100%">
                        <Image src="/images/foto.png" alt="cidade" />
                        <Flex align="center" justify="space-between" w="100%" p="4">
                            <Flex flex="1" direction="column">
                                <Text mb="2">Londres</Text>
                                <Text fontWeight="thin" fontSize="sm">Reino Unido</Text>
                            </Flex>

                            <Image src="/images/inglaterra.png" alt="Inglaterra" />
                        </Flex>
                    </Flex>

                    <Flex direction="column" justify="center" align="center" border="1px solid yellow.500" w="100%">
                        <Image src="/images/foto.png" alt="cidade" />
                        <Flex align="center" justify="space-between" w="100%" p="4">
                            <Flex flex="1" direction="column">
                                <Text mb="2">Londres</Text>
                                <Text fontWeight="thin" fontSize="sm">Reino Unido</Text>
                            </Flex>

                            <Image src="/images/inglaterra.png" alt="Inglaterra" />
                        </Flex>
                    </Flex>

                    <Flex direction="column" justify="center" align="center" border="1px solid yellow.500" w="100%">
                        <Image src="/images/foto.png" alt="cidade" />
                        <Flex align="center" justify="space-between" w="100%" p="4">
                            <Flex flex="1" direction="column">
                                <Text mb="2">Londres</Text>
                                <Text fontWeight="thin" fontSize="sm">Reino Unido</Text>
                            </Flex>

                            <Image src="/images/inglaterra.png" alt="Inglaterra" />
                        </Flex>
                    </Flex>

                    <Flex direction="column" justify="center" align="center" border="1px solid yellow.500" w="100%">
                        <Image src="/images/foto.png" alt="cidade" />
                        <Flex align="center" justify="space-between" w="100%" p="4">
                            <Flex flex="1" direction="column">
                                <Text mb="2">Londres</Text>
                                <Text fontWeight="thin" fontSize="sm">Reino Unido</Text>
                            </Flex>

                            <Image src="/images/inglaterra.png" alt="Inglaterra" />
                        </Flex>
                    </Flex>

                    <Flex direction="column" justify="center" align="center" border="1px solid yellow.500" w="100%">
                        <Image src="/images/foto.png" alt="cidade" />
                        <Flex align="center" justify="space-between" w="100%" p="4">
                            <Flex flex="1" direction="column">
                                <Text mb="2">Londres</Text>
                                <Text fontWeight="thin" fontSize="sm">Reino Unido</Text>
                            </Flex>

                            <Image src="/images/inglaterra.png" alt="Inglaterra" />
                        </Flex>
                    </Flex>
                </SimpleGrid>
            </Flex>
        </Box>
    );
}