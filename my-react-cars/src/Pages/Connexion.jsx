import React, { useState, useEffect } from "react";
import Navbar from "../Container/menuAcceuil";
import "../StyleEverywhere/Stylish.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Myconnexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  ////////inscirption///////
  const[nom,SetNom] = useState("");
  const[prenom,SetPrenom] = useState("");
  const[adresse,SetAdresse] = useState("");
  const[telephone,SetTelephone] = useState("");
  //////////////////////////////////

  const location = useLocation();
  // Determine connection status robustly: prefer location.state, fall back to stored client
  const stateIsConnected =
    location.state?.isConnected === true || location.state?.isConnected === "true";
  const storageIsConnected = !!localStorage.getItem("client");
  const isConnected = stateIsConnected || storageIsConnected;
  const navigate = useNavigate();

  
  const handleRedirect = () => {
    navigate("/Tableau-de-bord");
  };


  function senddata(e){
      e.preventDefault();
      localStorage.setItem("nom", nom);
      localStorage.setItem("prenom", prenom);
      localStorage.setItem("adresse", adresse);
      localStorage.setItem("telephone", telephone);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      handleRedirect();
  }

  const verifyInput = async (e) => {
    e.preventDefault();
    if (email && email.length > 0 && password && password.length > 0) {

      try {
      const response = await fetch("https://autocar-backend-23r3.onrender.com/clients/voiture/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
        if (response.ok) {
        const data = await response.json();

        localStorage.setItem("client", JSON.stringify(data));
        navigate("/TableauDeBord");
      } else {

        const errorData = await response.text();
        console.error("Erreur de connexion ❌", errorData);
        alert("Email ou mot de passe incorrect !");
      }
    } catch (error) {
      
      console.error("Erreur réseau :", error);
    }

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
  <Navbar isConnected={isConnected} />
       <h5 style={{textAlign: "center"}}>Information: La connexion a été désactivé car l'hebrgeur nécessite que je paie un abonnement, donc pour le moment pas de connexion (l'inscription aussi).</h5>
      <audio id="clickSound" src="/typewriter.mp3" />
      <form onSubmit={verifyInput} disabled>
        <table disabled style={{float: "left" }}>
          <tr>
            <th >Email</th>
            <td>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value) }
                disabled
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
                disabled
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <input type="submit" value="Se connecter"disabled />
            </td>
          </tr>
        </table>
        
      </form>

      <table border="1" style={{float: "right", borderColor: "blue"}} >
            <tr>
              <th colSpan="2">
                  Inscription
              </th>
            </tr>
            <tr>
              <td>
                Nom
              </td>
              <td>
                <input type="text" name="name" id="" value={nom} onChange={(e) => SetNom(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                Prénom
              </td>
              <td>
                <input type="text" name="Prenom" id=""  value={prenom} onChange={(e) => SetPrenom(e.target.value)}/>
              </td>
            </tr>
            <tr>
              <td>
                Email
              </td>
              <td>
                <input type="email" name="mail" id="" value={email} onChange={(e) => setEmail(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                Adresse
              </td>
              <td>
                <input type="text" name="adress" id="" value={adresse} onChange={(e) => SetAdresse(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                Téléphone
              </td>
              <td>
                 <input type="number" name="tel" id="" value={telephone} onChange={(e) => SetTelephone(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button disabled={localStorage.length>0 ? true : false}  type="submit" style={{width: "100%"}} onClick={senddata}>Envoyer</button>
              </td>
            </tr>
        </table>
       
    </div>
  );
}

export default Myconnexion;
