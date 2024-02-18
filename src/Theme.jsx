import { extendTheme } from "@chakra-ui/react";
import {Button, Link } from "@chakra-ui/react";

import "@fontsource/comfortaa";

const theme = extendTheme({
    styles: {
        global: {
            "*": {
                fontFamily: "'Comfortaa', sans-serif",
                padding: "0px",
                margin: "0px"
            },
            body: {
                borderBottom: "solid 8px green",
            },
            p: {
                fontSize: "18px"
            },
            label: {
                fontSize: "20px",
            }

        }
    },
});

export default theme;