import React from "react";
import Navbar from "../Container/menuAcceuil"
import { data } from "react-router-dom";



function TableauDeBord(){

    const client = JSON.parse(localStorage.getItem("client"))
    return(
        <Navbar nom={client.nom} />
    )
}



export default TableauDeBord;