import { useContext } from "react";
import StudentContext from "../context/StudentContext";

function useUser() {
  return useContext(StudentContext);
}

export default useUser;