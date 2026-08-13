import { useContext } from "react";
import UserContext from "../UserContext";

function useStudent() {
    return useContext(UserContext);
}

export default useStudent;