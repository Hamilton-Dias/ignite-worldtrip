import { Flex, Image, Text } from '@chakra-ui/react'

export function Banner() {
  return (
    <Flex w="100%" align="center" justify="space-between" backgroundImage="url(/images/background.png)" backgroundSize="cover" maxW={1480} position="relative" h={250}>
      <Flex flex="1" direction="column" p="4">
        <Text color="white" fontSize="3xl" fontWeight="bold">5 Continentes,</Text>
        <Text color="white" fontSize="3xl" fontWeight="bold" mb="5">infinitas possibilidades.</Text>
        <Text color="white" fontSize="lg" fontWeight="thin">Chegou a hora de tirar do papel a viagem que você <br />sempre sonhou.</Text>
      </Flex>
      <Flex>
        <Image src="/images/airplane.svg" alt="Airplane" w={280} h="auto" position="absolute" right="0" bottom={-5} />
      </Flex>
    </Flex>
  )
}