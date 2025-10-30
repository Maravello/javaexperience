import React from "react";
import { Link } from "react-router-dom";
import "../StyleEverywhere/Stylish.css";
function MenuAcceuil({isConnected}) {

    return(
        
        <div className="ContainerMenuAcceuil">
            <h1>Menu</h1>
            <nav className="TableMenuAcceuil">
                <ol className="breadcrumb">
                    {isConnected ?<li className="crumb"><button><Link to="/" style={{textDecoration: "none"}} state={{isConnected: true}}>Home</Link></button></li> :<li className="crumb"><button><Link to="/" >Home</Link></button></li> }
                    <li className="crumb"><button><Link to="/apropos" style={{textDecoration: "none"}}>About</Link></button></li>
                    <li className="crumb"><button><Link to="/Voiture" style={{textDecoration: "none"}}>Voitures</Link></button></li>
                    <li className="crumb"><button><Link to="/Contact" style={{textDecoration: "none"}}> Contact</Link></button></li>
                    {isConnected ?<li className="crumb"><button><Link to="/Connexion" state={{isConnected: true}} style={{textDecoration: "none"}}> Connexion</Link></button></li> : <li className="crumb"><button><Link to="/Connexion" > Connexion</Link></button></li>}
                    {isConnected && <li className="crumb"><button><Link to="/Tableau-de-bord" style={{textDecoration: "none"}}>Tableau de bord</Link></button></li>}
                </ol>
            </nav>
        </div>
    )
}


export default MenuAcceuil;