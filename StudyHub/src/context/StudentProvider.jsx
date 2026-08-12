import { useState } from "react";
import StudentContext from "./StudentContext";

function StudentProvider({ children }) {
  const [student] = useState({
    name: "Devansh Thakur",
    email: "thakurdevansh92@gmail.com",
    year: "3rd Year",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <StudentContext.Provider
      value={{ student, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;