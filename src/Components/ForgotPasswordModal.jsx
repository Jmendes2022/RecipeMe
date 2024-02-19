import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Text,
    Box
  } from '@chakra-ui/react'
import { useState } from 'react'

export default function ForgotPasswordModal({isForgotPasswordModalOpen, onForgotPasswordModalClose}) {
    
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


function handleSubmit() {
    handleLogIn(username, password);
    setUsername(null);
    setPassword(null);
}

    return (
      <>
        <Modal isOpen={isForgotPasswordModalOpen} onClose={onForgotPasswordModalClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Forgot Password</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <FormControl>
                    <Box mb={"2rem"} textAlign={"center"}>
                        <Text mb={"1rem"}>We see you forgot your password</Text>
                        <Text mb={"1rem"}><em><strong>No worries!</strong></em></Text>
                        <Text mb={"1rem"}>Just enter your email below and we will take care of the rest</Text>
                    </Box>
                    <FormLabel>Email Address</FormLabel>
                    <Input placeholder='Email Address' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='green' mr={"auto"} ml={"auto"} onClick={handleSubmit}>Send Email</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }