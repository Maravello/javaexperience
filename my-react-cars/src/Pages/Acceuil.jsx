import React, { useEffect, useState } from "react";
import MenuAcceuil from "../Container/menuAcceuil";
import { useLocation } from "react-router-dom";
import "../StyleEverywhere/Stylish.css";


function Acceuil() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const isConnected = location.state?.isConnected || false;
    const [clientCars, setClientCars] = useState([]);
    

    const addToCart = (car) => {
        console.log("🛒 Ajout au panier:", car);
       
        setClientCars(prevCars => {
            // ✅ Vérification que prevCars est un tableau
            if (!Array.isArray(prevCars)) {
                return [car]; // Si pas un tableau, on crée un nouveau tableau
            }
            return [...prevCars, car]; // Sinon on ajoute normalement
           
        })
         localStorage.setItem("ListeVoitures", [JSON.stringify(clientCars)]);;
    };

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch('https://autocar-backend-23r3.onrender.com/voiture/voitures');
                if (!response.ok) throw new Error('API non disponible');

                const data = await response.json();
                setCars(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, []);


    if (loading) return <div><img style={{position: "relative",top: "250px"}} src="./load.gif" alt="chargement" /></div>;
    if (error) return <div>❌ Erreur: {error}</div>;

    return (
        
        <div className="ContainerMenuAcceuil">
            <MenuAcceuil  isConnected={localStorage.length >0 ? true: false} />
            {isConnected && <div><h1>Votre panier </h1>
            <table border={1} style={{width: "100%", color: "lightblue", borderColor: "blue", borderRadius: "20px"}}>
                <tr style={{borderRadius: "20px"}}>
                    <th>
                        
                        id
                    </th>
                    <th>
                        marque
                    </th>
                     <th>
                        modèle
                    </th>
                    <th>
                        immatriculation
                    </th>
                    
                </tr>
             
                {clientCars.map((car, index) => (
                       <tr style={{textAlign: "center"}}>
                    <td key={index} >
                    {car.id}
                    
                </td>
                <td>
                    {car.marque}
                </td>
                <td>
                    {car.modele}
                </td>
                <td>
                    {car.immatriculation}
                </td>
                
                 </tr>
            ))}
                
            </table>
            
            </div>}
            <h1>🏎️ Notre Collection de Voitures</h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: '20px',
                width: '100%'
            }}>
                {cars.map((car) => (
                    <div key={car.id} className="divCars">
                        {/* Badge premium */}
                        <div className="car-badge">PREMIUM</div>

                        {/* Titre */}
                        <h3 className="car-title">{car.marque} {car.modele}</h3>

                        {/* Informations */}
                        <div className="car-info">
                            <div className="info-line">
                                <span className="info-icon">🆔</span>
                                <div className="info-text">
                                    <div className="info-label">Identifiant</div>
                                    <div className="info-value">{car.id}</div>
                                </div>
                            </div>

                            <div className="info-line">
                                <span className="info-icon">🚗</span>
                                <div className="info-text">
                                    <div className="info-label">Immatriculation</div>
                                    <div className="info-value">{car.immatriculation || 'Non spécifiée'}</div>
                                </div>

                            </div>
                            {isConnected && <div className="buy"><button onClick={() => addToCart({ id: car.id, marque: car.marque,modele: car.modele, immatriculation: car.immatriculation })} style={{ width: "100%", borderRadius: "20px", backgroundColor: "lightblue" }}>Acheter</button></div>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Acceuil;