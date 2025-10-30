import React, { useEffect, useRef, useState } from "react";
import "../StyleEverywhere/Stylish.css";
import MenuAcceuil from "../Container/menuAcceuil";
import { useLocation } from "react-router-dom";

function Apropos() {
    const [showMore, setShowMore] = useState(false);
    const confettiRef = useRef(null);
     const location = useLocation()
    const isConnected = location.state?.isConnected || 'false'

    useEffect(() => {
        const onKey = (e) => {
            if (e.key.toLowerCase() === "f") launchConfetti(40);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    function launchConfetti(amount = 30) {
        const container = confettiRef.current;
        if (!container) return;
        for (let i = 0; i < amount; i++) {
            const el = document.createElement("span");
            el.className = "confetti-piece";
            const size = Math.random() * 10 + 6;
            el.style.width = `${size}px`;
            el.style.height = `${size * 0.6}px`;
            el.style.left = `${Math.random() * 100}%`;
            el.style.background = `hsl(${Math.random() * 360} 80% 60%)`;
            el.style.transform = `rotate(${Math.random() * 360}deg)`;
            container.appendChild(el);
            // suppression après animation
            setTimeout(() => el.remove(), 5000 + Math.random() * 2000);
        }
    }

    function playEngineSound(duration = 1000) {
       try {
        // Créer un élément audio
        const audio = new Audio('/car-engine.mp3');
        
        // Configurer l'audio
        audio.volume = 0.7; // Volume entre 0 et 1
        audio.playbackRate = 1.0; // Vitesse de lecture normale
        
        // Jouer le son
        audio.play().catch(e => {
            console.warn("Impossible de jouer le son:", e);
        });
        
        // Arrêter après la durée spécifiée
        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0; // Remettre au début
        }, duration);
        
    } catch (e) {
        console.warn("Erreur de lecture audio:", e);
    }
    }

    return(
        <div className="apropos-container">
            <MenuAcceuil isConnected={isConnected ? true : false} />
            <h1 className="Title-a-propos interactive-title"
                onClick={() => launchConfetti(25)}
                title="Clique pour lancer des confettis">
                À Propos de Nous
            </h1>

            <div className="fun-row">
                <div className="car-emoji" role="button" tabIndex={0}
                     onClick={() => { playEngineSound(1200); launchConfetti(18); }}
                     onKeyDown={(e) => { if (e.key === "Enter") { playEngineSound(1200); launchConfetti(18); } }}
                >
                    🚗
                </div>

                <div className="fun-controls">
                    <button className="btn" onClick={() => launchConfetti(60)}>Fêter 🎉</button>
                    <button className="btn" onClick={() => playEngineSound(1500)}>Moteur 🔊</button>
                    <button className="btn" onClick={() => setShowMore(s => !s)}>{showMore ? "Moins" : "Plus"} ℹ️</button>
                </div>
            </div>

            <div className={`a-propos ${showMore ? "expanded" : "collapsed"}`}>
                <p>Bienvenue sur notre site de voitures ! Nous sommes passionnés par les voitures et nous nous efforçons de vous offrir la meilleure expérience possible.</p>
                <p>Notre équipe est dédiée à fournir des informations précises et à jour sur les dernières tendances automobiles, les modèles populaires, et bien plus encore.</p>
                <p>Merci de visiter notre site et n'hésitez pas à nous contacter pour toute question ou suggestion.</p>

                <div className="apropos-grid">
                    <div className="event-card" onMouseEnter={(e)=> e.currentTarget.classList.add("pulse")} onMouseLeave={(e)=> e.currentTarget.classList.remove("pulse")}>
                        <h3>Rencontres auto</h3>
                        <p>On organise des meetups mensuels — clique sur "Fêter" pour t'imaginer sur place.</p>
                    </div>
                    <div className="event-card">
                        <h3>Galerie fun</h3>
                        <p>Des photos, des GIFs, et des petits jeux autour des voitures.</p>
                    </div>
                </div>
            </div>

            <div ref={confettiRef} className="confetti-root" aria-hidden="true"></div>
        </div>
    )
}

export default Apropos;