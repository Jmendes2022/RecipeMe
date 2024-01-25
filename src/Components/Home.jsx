import { Container, Center, Flex, Text } from "@chakra-ui/layout";
import { useDisclosure} from '@chakra-ui/react'
import HistoryTab from "./HistoryTab";
import IngredientsTab from "./IngredientsTab";
import { useEffect, useState } from "react";

export default function Home() {

    return (
        <Container maxW={"100vw"} h={"100%"} p={"0px"} filter="auto" blur={`${ "0px"}`}>
            <Flex justifyContent={"space-evenly"}>
                <HistoryTab/>
                <Container w={"33%"} >
                    <Flex justifyContent={"center"}>
                        Main text here
                    </Flex>
                </Container>
                <IngredientsTab/>
            </Flex>
        </Container>
    )
}