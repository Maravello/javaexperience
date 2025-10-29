import React, { useState, useEffect } from "react";
import Navbar from "../Container/menuAcceuil";
import "../StyleEverywhere/Stylish.css";
import { useNavigate } from "react-router-dom";

function Myconnexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/Tableau-de-bord");
  };

  const verifyInput = (e) => {
    e.preventDefault();
    if (email && email.length > 0 && password && password.length > 0) {
      handleRedirect();
    } else {
      alert("Veuillez remplir correctement les champs");
    }
  };

  useEffect(() => {
    const sound = document.getElementById("clickSound");
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
  }, [email, password]);

  return (
    <div>
      <Navbar />
      <audio id="clickSound" src="/typewriter.mp3" />
      <form onSubmit={verifyInput}>
        <table>
          <tr>
            <th>Email</th>
            <td>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Mot de passe</th>
            <td>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <input type="submit" value="Se connecter" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Myconnexion;
