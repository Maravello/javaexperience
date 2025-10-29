import React, { useState } from "react";
import TableauDebord from "../Container/TableauDeBordContainer"



function TableauDeBord(){

   const [client, setClient] = useState({
    Nom: localStorage.getItem("nom") || "",
    Prenom: localStorage.getItem("prenom") || "",
    adresse: localStorage.getItem("adresse") || "",
    telephone: localStorage.getItem("telephone") || "",
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
});
    return(
        <div>
              <TableauDebord Nom={client.Nom} Prenom={client.Prenom} />
        </div>
      
    )
}



export default TableauDeBord;