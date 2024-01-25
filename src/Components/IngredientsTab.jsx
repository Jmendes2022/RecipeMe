import { Container, Flex, Heading, Box, Text } from "@chakra-ui/layout";
import { useDisclosure, Button, SlideFade } from '@chakra-ui/react'

export default function IngredientsTab() {
    const { isOpen, onToggle } = useDisclosure()

    return (
    <Container w={"33%"} h={"100%"}>
        <Flex justifyContent={"center"} direction={"column"} >
            {isOpen || <Button ml={"auto"} mt={"3rem"} mr={"auto"} colorScheme="green" variant={"solid"} onClick={onToggle}>Show Ingredients</Button>}
            <SlideFade direction="right" in={isOpen} style={{zIndex: 10}} >
                <Flex justifyContent={"center"}  w={"100%"}>
                    <Box
                    p='40px'
                    color='black'
                    maxW={"100%"}
                    minW={"80%"}
                    h={"70vh"}
                    bg='gray.300'
                    opacity={".8"}
                    rounded='md'
                    shadow='md'
                    >
                        <Flex direction={"column"} justifyContent={"space-between"} h={"100%"}>
                                <Heading textAlign={"center"} m={"0px"} p={"2px"} borderBottom={"2px solid black"}>Your Ingredients</Heading>
                                <Text overflow={"auto"}  minH={"80%"}>
                                    Here is where your ingredients will go....
                                </Text>
                                <Button colorScheme="green" variant={"solid"} onClick={onToggle} w={"50%"} ml={"auto"} mr={"auto"}>Exit</Button>
                            </Flex>
                        </Box>
                    </Flex>
            </SlideFade>
        </Flex>
    </Container>
    )
}