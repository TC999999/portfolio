import { Container } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import Navbar from "./Navbar";
import WidthProvider from "./widthProvider.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <WidthProvider>
          <Container maxWidth="xl">
            <Navbar />
            <RoutesList />
          </Container>
        </WidthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
