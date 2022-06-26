import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Center, Box } from "@mantine/core";
import Heading from "./common_components/Heading";
import Home from "./pages/Home";
import Shortner from "./pages/Shortner";
import "./App.css";
import PageNotFound from "./pages/Error/PageNotFound";
import Alert from "./common_components/Alert";

function App() {
  return (
    <div className="App">
      <Center style={{ height: "100vh" }}>
        <Box sx={{ minWidth: 300 }}>
          {/* alert */}
          <Alert />
          <BrowserRouter>
            {/* heading */}
            <Heading />
            {/* routes start */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shortner" element={<Shortner />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            {/* routes end */}
          </BrowserRouter>
        </Box>
      </Center>
    </div>
  );
}

export default App;
