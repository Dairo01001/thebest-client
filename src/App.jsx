import { Container, createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="sm">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Container>
  </ThemeProvider>
);

export default App;
