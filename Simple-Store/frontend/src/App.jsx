import { Box, Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CreateProductPage from "./pages/CreateProductPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Box minH={"100vh"}>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/createProduct' element={<CreateProductPage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
