import { Container, Flex, Heading, Text, Box, OrderedList, ListItem, } from "@chakra-ui/layout";
import { FormControl, Input, Button, Select, FormLabel } from "@chakra-ui/react";
import { GrOverview } from "react-icons/gr";

export default function HistoryTab({recipeHistory, handleSetGeneratedRecipe}) {

    return (
    <Container w={"33%"} minH={"90vh"} maxH={"90vh"} p={0} m={0}>
        <Flex justifyContent={"center"} direction={"column"}>
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
                    <Flex direction={"column"} justifyContent={"space-between"} h={"100%"}>
                        <Heading as={"h3"} textAlign={"center"} m={"0px"} p={"2px"} borderBottom={"2px solid black"}>Your Recipes</Heading>
                        <OrderedList>
                            {recipeHistory && recipeHistory.map((x, index) => x.recipe.title !== undefined && 
                                <ListItem key={index}>
                                    <Flex justifyContent={"space-between"} alignItems={"center"} textAlign={"center"} w={"100%"}>
                                        <Text w={"50%"}>{x.recipe.title}</Text>
                                        <GrOverview size={20} cursor={"pointer"} onClick={() => handleSetGeneratedRecipe(x)}/>
                                    </Flex>
                                </ListItem>
                            )}
                        </OrderedList>
                        {<Text textAlign={"center"} minH={"80%"}>
                            Create an account or Login to start saving your lookup history
                        </Text>}
                    </Flex>
                </Box>
            </Flex>
      </Flex>
    </Container>
    )
}