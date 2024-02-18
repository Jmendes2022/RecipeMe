import { Flex, Center, Text, Button} from '@chakra-ui/react'

export default function Navbar() {
    return (
        <Center ml={"auto"} mr={"2rem"} >
            <Flex direction={"column"} rowGap={"2rem"} justifyContent={"space-evenly"} alignItems={"flex-end"}>
                <Flex direction={"column"} alignItems={"flex-end"}>
                    <Text fontSize={"x-large"}>Welcome, Jordan!</Text>
                    <Button size={"sm"}  colorScheme={"red"} variant="link" >Logout</Button>
                </Flex>
                <Flex  columnGap={"3rem"} justifyContent={"space-evenly"} >
                    <Button colorScheme='green' variant={"solid"}>Home</Button>
                    <Button colorScheme='green' variant={"solid"}>All Recipes</Button>
                    <Button colorScheme='green' variant={"solid"}>Your Recipes</Button>
                </Flex>
            </Flex>
        </Center>
    )
}