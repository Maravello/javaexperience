import React,{useState, useEffect}from "react";
import MenuAcceuil from "../Container/menuAcceuil";
import "../StyleEverywhere/Stylish.css";
import { useLocation } from "react-router-dom";
function Voitures() {
    const [hovered, setHovered] = useState(false);
    const [hoveredSecond, setSecondHovered] = useState(false);
    const location = useLocation()
    const isConnected = location.state?.isConnected || 'false'

    useEffect(() => {
        const button = document.querySelector('.ButtonVoitures');
        const button2 = document.querySelector('.ButtonVoitures2');
        if(hovered){
            button.style.color = '#ffcc00'; // Change to desired hover color
        }else{
            button.style.color = ''; // Reset to default color
        }
        if(hoveredSecond){
            button2.style.color = '#ffcc00'; // Change to desired hover color
        }else{
            button2.style.color = ''; // Reset to default color
        }
    }, [hovered, hoveredSecond]);

    return(
        <div className="voiture-container" style={{margin: "auto"}}>
            <MenuAcceuil isConnected={isConnected ? true : false} />
                {localStorage.length>0 ?<table border="1" className="TableMenuVoiture">
                    <tr>
                        <td className="tdVoiture">
                            <button className="ButtonVoitures" onMouseEnter={() =>setHovered(true)} onMouseLeave={() =>setHovered(false)}>Déposer une voitures</button>
                        </td>
                        <td className="tdVoiture">
                            <button className="ButtonVoitures2" onMouseEnter={() =>setSecondHovered(true)} onMouseLeave={() =>setSecondHovered(false)}>Voir les voitures déposées</button>
                        </td>
                    </tr>
                </table>: <h1> <u>Vous avez besoin d'être connecterou inscrit pour pouvoir utilisé les fonctionnalité de cette page</u></h1>}
                {hovered && <img style={{marginLeft: "250px"}} src="/sonic.gif" alt="Car Icon" />}
                {hoveredSecond && <img style={{marginLeft: "250px"}} src="/NFS.gif" alt="Car Icon" />}
        </div>
    )
}

export default Voitures;