import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

export default function LogoutSuccessfullAlert() {

    return (
        <Alert status='success'>
            <AlertIcon />
            <AlertTitle>Your browser is outdated!</AlertTitle>
            <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
        </Alert>
)}