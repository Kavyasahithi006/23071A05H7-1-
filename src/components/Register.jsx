// components/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registered! Please login.");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
  
}

export default Register;
