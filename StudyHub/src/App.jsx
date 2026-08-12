import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import TaskManager from "./pages/TaskManager";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import StudentProvider from "./context/StudentProvider";

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;