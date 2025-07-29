import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Counter from './pages/Counter';
import Form from "./pages/handling-form";
import Form2 from "./pages/form2";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/register/" element={<Registration />} />
      <Route path="/login/" element={<Login />} />
      <Route path="/count" element={<Counter />} />
      <Route path="/form" element={<Form />} />
      <Route path="/form2" element={<Form2 />} />
    </Routes>
  );
}
export default App;
