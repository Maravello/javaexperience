import React from "react";
import { Link } from "react-router-dom";
import "../StyleEverywhere/Stylish.css";
function MenuAcceuil({isConnected}) {

    return(
        
        <div className="ContainerMenuAcceuil">
            <h1>Menu</h1>
            <nav className="TableMenuAcceuil">
                <ol className="breadcrumb">
                    {isConnected ?<li className="crumb"><button><Link to="/" state={{isConnected: true}}>Home</Link></button></li> :<li className="crumb"><button><Link to="/" >Home</Link></button></li> }
                    <li className="crumb"><button><Link to="/apropos">About</Link></button></li>
                    <li className="crumb"><button><Link to="/Voiture">Voitures</Link></button></li>
                    <li className="crumb"><button><Link to="/Contact"> Contact</Link></button></li>
                    {isConnected ?<li className="crumb"><button><Link to="/Connexion" state={{isConnected: true}}> Connexion</Link></button></li> : <li className="crumb"><button><Link to="/Connexion" > Connexion</Link></button></li>}
                    {isConnected && <li className="crumb"><button><Link to="/Tableau-de-bord">Tableau de bord</Link></button></li>}
                </ol>
            </nav>
        </div>
    )
}


export default MenuAcceuil;