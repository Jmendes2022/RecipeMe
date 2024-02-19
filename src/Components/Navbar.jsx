import { Flex, Center, Text, Button} from '@chakra-ui/react'

export default function Navbar({handleLogIn, handleLogout, user, handleOpenLoginModal}) {
    return (
        <Center ml={"auto"} mr={"2rem"} >
            <Flex direction={"column"} rowGap={"2rem"} justifyContent={"space-evenly"} alignItems={"flex-end"}>
                <Flex direction={"column"} alignItems={"flex-end"}>
                    <Text fontSize={"x-large"}>{`Welcome, ${user ?? "Guest"}!`}</Text>
                    {user 
                    ? 
                        <Button size={"sm"}  colorScheme={"red"} variant="link" onClick={handleLogout}>Log out</Button> 
                    : 
                        <Button size={"sm"}  colorScheme={"red"} variant="link" onClick={handleOpenLoginModal}>Log in</Button>
                    }
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