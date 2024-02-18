import { Container, Flex, Heading, Box, Text, ListItem, List } from "@chakra-ui/layout";
import AddIngredient from "./AddIngredient";
import { useState } from "react";

export default function IngredientsTab({ingredients, handleSetIngredients, handleDeleteIngredient}) {


    function handleSubmitIngredient(e) {
        e.preventDefault();
        
        if (!CheckIfInputIsValid(e.target[0].value) ||
            !CheckIfInputIsValid(e.target[0].value) ||
            !CheckIfInputIsValid(e.target[1].value)) return;
    
        const INGREDIENT = {
            name: e.target[0].value,
            quantity: e.target[1].value,
            measurementType: e.target[2].value
        };
        
        handleSetIngredients(INGREDIENT);
    }
    
  

    function CheckIfInputIsValid(input) {
        if (input === null || input === undefined || input === "e") return false;
        return true;
    }

    return (
    <Container w={"33%"} minH={"90vh"} maxH={"90vh"} p={0} m={0}>
        <Flex justifyContent={"center"} direction={"column"} >
            <Flex justifyContent={"center"} w={"100%"}>
                <Box
                    p='40px'
                    color='black'
                    maxW={"100%"}
                    minW={"100%"}
                    minH={"80vh"}
                    bg='gray.300'
                    rounded='md'
                    shadow='md'
                    position={"relative"}
                >
                    <Heading as={"h3"} textAlign={"center"}  mb={"10"} p={"2px"} borderBottom={"2px solid black"}>Your Ingredients</Heading>
                        <List w={"100%"} maxH={"50%"} overflowY={"auto"}>
                            {ingredients.length > 0 ? ingredients.map((x, index) => 
                            <ListItem mt={3} key={index} >
                                <Flex justifyContent={"space-between"}>
                                    <Text>{x.quantity} {x.measurementType} of {x.name}</Text>
                                    <Text cursor={"pointer"} onClick={() => handleDeleteIngredient(x)}>❌</Text>
                                </Flex>
                            </ListItem>)
                             : <Text w={"100%"} textAlign={"center"}>Enter some ingredients below to get started</Text>}
                        </List>
                    <Flex justifyContent={"center"}>
                        <AddIngredient handleSubmitIngredient={handleSubmitIngredient}/>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    </Container>
    )
}