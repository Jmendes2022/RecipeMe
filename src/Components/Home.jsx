import { Container, Flex, Text, Heading, OrderedList, ListItem, UnorderedList} from "@chakra-ui/layout";
import { Button, } from '@chakra-ui/react'
import HistoryTab from "./HistoryTab";
import IngredientsTab from "./IngredientsTab";
import {useState } from "react";


export default function Home() {

const [generatedRecipe, setGeneratedRecipe] = useState(null);
const [ingredients, setIngredients] = useState([]);

const recipeHistory = JSON.parse(localStorage.getItem("recipeHistory"));

function handleSetIngredients(ingredient) {
    setIngredients([...ingredients, {...ingredient}]);
}

function handleDeleteIngredient(ingredient) {
    const remainingIngredients = ingredients.filter(x => x != ingredient);
    setIngredients(remainingIngredients);
}

function handleSetGeneratedRecipe(recipe) {
    if (recipe === null || recipe === undefined) return;

    setGeneratedRecipe(recipe);
}

function handleGenerateRecipe() {

    //ONLY WILL SAVE IF THE USER IS LOGGED IN.

    let history = localStorage.getItem("recipeHistory") ?? [];

    console.log(history);

    //api call to server

    //testing the response look
    const response = {
        "recipe": {
            "title": "Chicken and Rice",
            "ingredients": 
                [
                    {
                        "ingredient": "chicken",
                        "quantity": "2 cups",
                    },
                    {
                        "ingredient": "chicken",
                        "quantity": "2 cups",
                    },
                    {
                        "ingredient": "chicken",
                        "quantity": "2 cups",
                    },
                    {
                        "ingredient": "chicken",
                        "quantity": "2 cups",
                    },
                    {
                        "ingredient": "chicken",
                        "quantity": "2 cups",
                    },
                    {
                        "ingredient": "chicken",
                        "quantity": "2 cups",
                    },
                    {
                        "ingredient": "rice",
                        "quantity": "3 cups",
                    },
                ],
            },
            "instructions": [
              "Combine 2 cups of cooked and shredded chicken with 1 cup of cooked white rice.",
              "Mix well until the chicken and rice are evenly distributed.",
              "Serve hot and enjoy your simple and delicious Chicken and Rice!"
            ],
            "notes": [
              "Feel free to add your favorite seasonings or sauces for extra flavor.",
              "You can also include vegetables or herbs if you have them on hand."
            ]
          }
          
          handleSetGeneratedRecipe(response);
          return;
          history.push(response);
          localStorage.setItem("recipeHistory", JSON.stringify(history));
}


    return (
        <Container minW={"100%"}  minH={"90vh"} maxH={"90vh"} m={"0px"} ml={"auto"} mr={"auto"} p={"0px"} filter="auto" blur={`${ "0px"}`} >
            <Flex justifyContent={"center"} minH={"auto"}>
                <HistoryTab recipeHistory={recipeHistory} handleSetGeneratedRecipe={handleSetGeneratedRecipe}/>
                {generatedRecipe ? 
                <Container maxW={"100%"} maxH={"80vh"} minH={"80vh"} overflowY={"auto"}>
                    <Flex justifyContent={"center"} flexDirection={"column"} pl={"5rem"} pr={"5rem"}>
                        <Heading as={"h2"} mt={"3rem"} textAlign={"center"}>{generatedRecipe.recipe.title}</Heading>
                            <Heading as={"h4"} fontSize={"25px"} textAlign={"center"} mt={"2rem"} mb={"2rem"}>
                                <u>Ingredients</u>
                            </Heading>
                        <UnorderedList mt={"1rem"} fontSize={"20px"} ml={"auto"} mr={"auto"} listStylePosition={"inside none"}>
                            {generatedRecipe.recipe.ingredients.map((ingredient, index) => <ListItem key={index}>{ingredient.quantity} of {ingredient.ingredient}</ListItem>)}
                        </UnorderedList>
                            <Heading as={"h4"} fontSize={"25px"} mt={"2rem"} mb={"2rem"} textAlign={"Center"}>
                                <u>Instructions</u>
                            </Heading>
                        <OrderedList mt={"1rem"} mb={"1rem"} textAlign={"center"} fontSize={"20px"}>
                            {generatedRecipe.instructions.map((instruction, index) => <ListItem key={index} mt={".75rem"}>{instruction}</ListItem>)}
                        </OrderedList>
                        {generatedRecipe.notes.map((x, index) => <Text key={index} fontSize={"14px"} textAlign={"center"}><em><strong>* {x} *</strong></em></Text>)}
                        <Button colorScheme="green" variant={"solid"} w={"50%"} ml={"auto"} mr={"auto"} mt={"2rem"} onClick={handleGenerateRecipe}>Generate Recipe</Button>
                    </Flex>
                </Container> 
                : 
                <Container maxW={"100%"} maxH={"80vh"} minH={"80vh"} overflowY={"auto"}>
                    <Flex justifyContent={"center"} flexDirection={"column"} pl={"15rem"} pr={"15rem"}>
                        <Heading as={"h2"} mt={"3rem"} textAlign={"center"}>Welcome to Recipe Me!</Heading>
                        <Text fontSize={"20px"} mt={"3rem"} textAlign={"center"}>Don't know what to cook? Dont know any recipes?</Text>
                        <Text fontSize={"20px"} mt={"1rem"} textAlign={"center"}><strong><em>No worries, We are here to help!</em></strong></Text>
                        <OrderedList mt={"1rem"} textAlign={"center"}>
                            <Heading as={"h4"} fontSize={"25px"} mt={"2rem"}>
                                <u>How it works</u>
                                <ListItem mt={"2rem"}>Enter your ingredients &#8594;</ListItem>
                                <ListItem mt={"2rem"}>Click the Generate Recipe Button &#8595;</ListItem>
                                <ListItem mt={"2rem"}>&#8592; Generated Recipes are saved for later!</ListItem>
                            </Heading>
                        </OrderedList>
                        <Button colorScheme="green" variant={"solid"} w={"50%"} ml={"auto"} mr={"auto"} mt={"5rem"} onClick={handleGenerateRecipe}>Generate Recipe</Button>
                    </Flex>
                </Container>
                }
                <IngredientsTab ingredients={ingredients} handleSetIngredients={handleSetIngredients} handleDeleteIngredient={handleDeleteIngredient}/>
            </Flex>
        </Container>
    )
}