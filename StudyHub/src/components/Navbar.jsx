import { NavLink } from  "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>{" "}
      <NavLink to="/login">Login</NavLink>{" "}
      <NavLink to="/tasks">Tasks</NavLink>{" "}
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
}

export default Navbar;
    

