import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

function Login() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useUser();

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);
    navigate("/tasks", { replace: true });
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" />
        <br />

        <input type="password" placeholder="Password" />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;