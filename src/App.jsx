import { Container, Flex} from '@chakra-ui/layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from "./Components/Footer";


const router = createBrowserRouter([
  {
      path: "/",
      element: <Home/>
  }
])

function App() {

  return (
      <Flex h="100%" w={"100%"} direction={"column"}>
        <Header />
        <RouterProvider router={router} />
        <Footer/>
      </Flex>
  )
}

export default App
