// components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("loggedIn");

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <nav>
      <div style={{ display: "flex", gap: "15px" }}>
        {!loggedIn && (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
        {loggedIn && <Link to="/fibonacci">Fibonacci</Link>}
      </div>

      {loggedIn && (
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
}

export default Navbar;
