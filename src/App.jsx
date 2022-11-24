import React from "react";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Employee from "./pages/Employee";
import EmployeeDetails from "./pages/EmployeeDetails";

const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="sm">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employee/:id" element={<EmployeeDetails />} />
      </Routes>
    </Container>
  </ThemeProvider>
);

export default App;
