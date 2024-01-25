import { Flex, Center, Text, Button} from '@chakra-ui/react'

export default function Navbar() {
    return (
        <Center mr={"5rem"}>
            <Flex direction={"column"} rowGap={"2rem"} justifyContent={"space-evenly"} alignItems={"flex-end"}>
                <Flex direction={"column"} alignItems={"flex-end"}>
                    <Text fontSize={"x-large"}>Welcome, Jordan!</Text>
                    <Button size={"sm"} width={"5rem"} colorScheme={"red"} variant="link" >Logout</Button>
                </Flex>
                <Flex w={"25rem"} columnGap={"3rem"} justifyContent={"space-evenly"} mr={"15rem"}>
                    <Button colorScheme='orange' variant={"outline"}>Home</Button>
                    <Button colorScheme='orange' variant={"outline"}>All Recipes</Button>
                    <Button colorScheme='orange' variant={"outline"}>Your Recipes</Button>
                </Flex>
            </Flex>
        </Center>
    )
}