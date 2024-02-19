import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

import "../App.css"

const alertStyle = {
    position: "absolute",
    justifyContent: "center",
    animation: "fadeOut 8s ease-out"
}

export default function LogoutSuccessfullAlert() {

    return (
        <Alert status='success' style={alertStyle} >
            <AlertIcon />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>You have been securely logged out!</AlertDescription>
        </Alert>
)}