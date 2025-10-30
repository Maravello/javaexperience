import React, { useState } from "react";
import TableauDebord from "../Container/TableauDeBordContainer"
import { useNavigate } from "react-router-dom";
import Navbar from "../Container/menuAcceuil"


function TableauDeBord(){

   const [client, setClient] = useState({
    Nom: localStorage.getItem("nom") || "",
    Prenom: localStorage.getItem("prenom") || "",
    adresse: localStorage.getItem("adresse") || "",
    telephone: localStorage.getItem("telephone") || "",
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
});
 const redirection = useNavigate();

    const handleRedirect = () => {
    redirection("/");
  };
    return(
        <div>
            
              {client.Nom || client.Prenom || client.adresse || client.email || client.password || client.telephone ?      <div>  <TableauDebord Nom={client.Nom} Prenom={client.Prenom} /></div> : <div><Navbar /><h1> <u>Vous avez besoin d'être connecter ou inscrit pour accéder à cette page</u></h1><button style={{width: "100%", backgroundColor: "red"}} onClick={handleRedirect}>Retourner au menu</button></div>}
         
        </div>
      
    )
}



export default TableauDeBord;