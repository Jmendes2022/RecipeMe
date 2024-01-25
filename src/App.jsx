import { Flex} from '@chakra-ui/layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'

const router = createBrowserRouter([
  {
      path: "/",
      element: <Home/>
  }
])

function App() {

  return (
    <Flex w="100vw" height="auto" direction={"column"}>
      <Header />
      <RouterProvider router={router} />
    </Flex>
  )
}

export default App
