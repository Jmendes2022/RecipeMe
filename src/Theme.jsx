import { extendTheme } from "@chakra-ui/react";
import {Button, Link } from "@chakra-ui/react";

import "@fontsource/comfortaa";

const theme = extendTheme({
    styles: {
        global: {
            "*": {
                fontFamily: "'Comfortaa', sans-serif",
            }
        }
    },
    components: {
        // Button: {
        //     baseStyle: {
        //         color: "red"
        //     }
        // },
        // Link: {
        //     baseStyle: {
        //         color: "red"
        //     }
        // }
    }
});

export default theme;