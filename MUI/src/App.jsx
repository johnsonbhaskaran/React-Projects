import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/system";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction='row' spacing={2} justifyContent='space-evenly'>
        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
