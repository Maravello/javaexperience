import React from "react";
import Navbar from "../Container/menuAcceuil"
import { useNavigate } from "react-router-dom";

function TBDcontainer(props){
    
    const redirection = useNavigate();

    const handleRedirect = () => {
    redirection("/");
  };
    function heDisconnected()
    {
        localStorage.clear();
        handleRedirect()
    }
    return(
        <div>
            <Navbar/>
        <h1>Bonjour {props.Prenom} {props.Nom}  </h1>

        <button type="submit" style={{justifyContent: "center", alignItems: "center",display: "flex", backgroundColor: "red", width: "100%"}} onClick={heDisconnected}>Déconnexion</button>
        </div>
  
    )
}


export default TBDcontainer;