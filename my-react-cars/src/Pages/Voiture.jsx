import React, { useState, useEffect } from "react";
import MenuAcceuil from "../Container/menuAcceuil";
import "../StyleEverywhere/Stylish.css";

function Voitures() {
    const [hovered, setHovered] = useState(false);
    const [hoveredSecond, setSecondHovered] = useState(false);

    // ✅ CORRECTION : Utiliser useRef ou style direct au lieu de querySelector
    useEffect(() => {
        const button = document.querySelector('.ButtonVoitures');
        const button2 = document.querySelector('.ButtonVoitures2');
        
        // ✅ VÉRIFIER SI LES ÉLÉMENTS EXISTENT AVANT DE LES UTILISER
        if (button) {
            if (hovered) {
                button.style.color = '#ffcc00';
            } else {
                button.style.color = '';
            }
        }
        
        if (button2) {
            if (hoveredSecond) {
                button2.style.color = '#ffcc00';
            } else {
                button2.style.color = '';
            }
        }
    }, [hovered, hoveredSecond]);

    // ✅ MEILLEURE SOLUTION : Utiliser le style conditionnel dans le JSX
    const buttonStyle1 = {
        color: hovered ? '#ffcc00' : '',
        transition: 'color 0.3s ease'
    };

    const buttonStyle2 = {
        color: hoveredSecond ? '#ffcc00' : '',
        transition: 'color 0.3s ease'
    };

    return(
        <div className="voiture-container" style={{margin: "auto"}}>
            <MenuAcceuil isConnected={localStorage.length > 0} />
            
            {localStorage.length > 0 ? (
                <table border="1" className="TableMenuVoiture">
                    <tr>
                        <td className="tdVoiture">
                            {/* ✅ SOLUTION 1 : Style conditionnel direct */}
                            <button 
                                className="ButtonVoitures" 
                                style={buttonStyle1}
                                onMouseEnter={() => setHovered(true)} 
                                onMouseLeave={() => setHovered(false)}
                            >
                                Déposer une voiture
                            </button>
                        </td>
                        <td className="tdVoiture">
                            {/* ✅ SOLUTION 1 : Style conditionnel direct */}
                            <button 
                                className="ButtonVoitures2" 
                                style={buttonStyle2}
                                onMouseEnter={() => setSecondHovered(true)} 
                                onMouseLeave={() => setSecondHovered(false)}
                            >
                                Voir les voitures déposées
                            </button>
                        </td>
                    </tr>
                </table>
            ) : (
                <h1> 
                    <u>Vous avez besoin d'être connecté ou inscrit pour pouvoir utiliser les fonctionnalités de cette page</u>
                </h1>
            )}
            
            {hovered && <img style={{marginLeft: "250px"}} src="/sonic.gif" alt="Car Icon" />}
            {hoveredSecond && <img style={{marginLeft: "250px"}} src="/NFS.gif" alt="Car Icon" />}
        </div>
    )
}

export default Voitures;