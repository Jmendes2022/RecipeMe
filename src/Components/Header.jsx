import { Heading, Flex, Image, Center } from '@chakra-ui/react'
import chef from '../assets/chef.svg';
import Navbar from './Navbar';


export default function Header({handleLogIn, handleLogout, user, handleOpenLoginModal}) {
    return (
        <Center borderBottom={"solid 2px black"} >
            <Flex w={"100%"} h={"10rem"} alignItems={'center'} justifyContent={"space-evenly"}>
                <Image mr={"auto"} boxSize={"10rem"} src={chef} alt='image of chef giving thumbs up'/>
                <Heading as={"h1"} ml={"auto"} fontSize={"4rem"}>Recipe Me!</Heading>
                <Navbar handleLogIn={handleLogIn} handleLogout={handleLogout} user={user} handleOpenLoginModal={handleOpenLoginModal}/>
            </Flex>
        </Center>
    )
}