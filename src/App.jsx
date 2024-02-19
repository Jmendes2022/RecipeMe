import { Container, Flex} from '@chakra-ui/layout'
import { useDisclosure } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from "./Components/Footer";
import { useState } from 'react';
import LoginModal from './Components/LoginModal'
import ForgotPasswordModal from './Components/ForgotPasswordModal'
import LogoutSuccessfullAlert from './Components/LogoutSuccessfullAlert'


const router = createBrowserRouter([
  {
      path: "/",
      element: <Home/>
  }
])

function App() {
  const [user, setUser] = useState();
  
  //This state for the login modal
  const { isOpen: isLoginModalOpen, onOpen: onLoginModalOpen, onClose: onLoginModalClose } = useDisclosure();
  const { isOpen: isForgotPasswordModalOpen, onOpen: onForgotPasswordModalOpen, onClose: onForgotPasswordModalClose } = useDisclosure();



function handleLogIn(username, password) {

  //Setup API call to log user in

  onClose();
}

function handleLogout() {
  setUser(null);

  //Delete JWT from Local storage;
}


  return (
      <Flex h="100%" w={"100%"} direction={"column"}>
        <Header handleLogIn={handleLogIn} handleLogout={handleLogout} user={user} handleOpenLoginModal={onLoginModalOpen}/>
        <RouterProvider router={router} />
        <LoginModal isLoginModalActive={isLoginModalOpen} handleCloseLoginModal={onLoginModalClose} handleLogIn={handleLogIn} onForgotPasswordModalOpen={onForgotPasswordModalOpen}/>
        <ForgotPasswordModal isForgotPasswordModalOpen={isForgotPasswordModalOpen} onForgotPasswordModalClose={onForgotPasswordModalClose}/>
        <LogoutSuccessfullAlert/>
        <Footer/>
      </Flex>
  )
}

export default App
