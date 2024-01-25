import { Heading, Flex, Image, Center } from '@chakra-ui/react'
import chef from '../assets/chef.svg';
import Navbar from './Navbar';


export default function Header() {
    return (
        <Center borderBottom={"solid 2px black"}>
            <Flex w={"100vw"} h={"10rem"} alignItems={'center'} justifyContent={"space-between"}>
                    <Flex justifyContent={"flex-start"} alignItems={"center"}>
                        <Heading transform={"rotate(-7deg)"} ml={"4rem"} fontSize={"4rem"}>Recipe Me!</Heading>
                        <Image ml={"10rem"} boxSize={"7rem"} src={chef} alt='image of chef giving thumbs up'/>
                    </Flex>
                <Navbar/>
            </Flex>
        </Center>
    )
}