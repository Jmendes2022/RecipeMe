import { Box } from "@chakra-ui/layout";
import { FormControl, Input, Flex, Button, Select, FormLabel } from "@chakra-ui/react";

export default function AddIngredient({handleSubmitIngredient}) {


    return (
        <FormControl mt={"3rem"}  pl={"4"} pr={"4"} position={"absolute"} bottom={"10"}>
            <form onSubmit={handleSubmitIngredient}>
                    <FormLabel>Ingredient</FormLabel>
                    <Input variant={"filled"} placeholder="Ingredient" required />
                    <Flex mt={"4"}>    
                        <Box w={"40%"}>
                            <FormLabel>Quantity</FormLabel>
                            <Input variant={"filled"} w={"70%"} type="number" placeholder="5" required/>
                        </Box>
                        <Box>
                            <FormLabel>Measurement Type</FormLabel>
                            <Select w={"100%"} defaultValue={"cups"} required variant={"filled"}>
                                <option value="tsp">Teaspoons (tsp)</option>
                                <option value="tbsp">Tablespoons (tbsp)</option>
                                <option value="fl-oz">Fluid Ounces (fl oz)</option>
                                <option value="cups">Cups (c)</option>
                                <option value="pt">Pints (pt)</option>
                                <option value="qt">Quarts (qt)</option>
                                <option value="gal">Gallons (gal)</option>
                                <option value="ml">Milliliters (ml)</option>
                                <option value="L">Liters (L)</option>
                                <option value="oz">Ounces (oz)</option>
                                <option value="lb">Pounds (lb)</option>
                                <option value="g">Gram (g)</option>
                                <option value="kg">Kilogram (kg)</option>
                            </Select>
                        </Box>
                    </Flex>
                    <Flex justifyContent={"center"}>
                        <Button colorScheme="green" variant={"solid"} mt={"5"} type="submit">Add Ingredient</Button>
                    </Flex>
            </form>
        </FormControl>
    )

}