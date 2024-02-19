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
  } from '@chakra-ui/react'
import { useState } from 'react'

export default function LoginModal({isLoginModalActive, handleCloseLoginModal, handleLogIn, onForgotPasswordModalOpen}) {
    
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


function handleSubmit() {
    handleLogIn(username, password);
    setUsername(null);
    setPassword(null);
}

function handleForgotPassword() {
    onForgotPasswordModalOpen();
    handleCloseLoginModal();
}

    return (
      <>
        <Modal isOpen={isLoginModalActive} onClose={handleCloseLoginModal} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <FormControl>
                <FormLabel>Username</FormLabel>
                <Input placeholder='Username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                </FormControl>
                <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button variant='ghost' onClick={handleForgotPassword}>Forgot Password?</Button>
              <Button colorScheme='green' ml={"auto"} onClick={handleSubmit}>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }