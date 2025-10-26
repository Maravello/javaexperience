import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "../StyleEverywhere/Stylish.css";
import { useNavigate } from "react-router-dom";

function FormContact() {
    const [nom, setNom] = React.useState("");
    const [prenom, setPrenom] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [submitClicked, setSubmitClicked] = React.useState(false);
    const [resetClicked, setResetClicked] = React.useState(false);
    const navigate = useNavigate();
    const [error, setError] = React.useState(false);

    async function sendData(Anom, Aprenom, Aemail, Amessage) {
        try {
            console.log("Envoi des données:", { Anom, Aprenom, Aemail, Amessage });
            
            const response = await fetch('https://autocar-backend-23r3.onrender.com/contact/NewMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nom: Anom,
                    prenom: Aprenom,
                    mail: Aemail,
                    message: Amessage,
                    repondu: false
                })
            });

            console.log("Réponse HTTP:", response.status);
            
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }

            const data = await response.json();
            console.log("Données reçues:", data);
            return data;
            
        } catch (error) {
            console.error('Erreur détaillée:', error);
            throw error;
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setSubmitClicked(true);
        
        const audio2 = document.getElementById("clickSound2");
        const audio4 = document.getElementById("clickSound4");
        
        if (nom && prenom && email && message) {
            try {
                if (audio2) {
                    audio2.currentTime = 0;
                    audio2.play();
                }
                
                const result = await sendData(nom, prenom, email, message);
                console.log("Insertion réussie:", result);
                
                alert(`Merci ${prenom} ${nom} pour votre message : "${message}". Nous vous contacterons bientôt à l'adresse ${email}.`);
                navigate("/");
                
            } catch (error) {
                console.error("Erreur lors de l'envoi:", error);
                if (audio4) {
                    audio4.currentTime = 5.2;
                    audio4.play();
                }
                alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
            }
        } else {
            if (audio4) {
                audio4.currentTime = 5.2;
                audio4.play();
            }
            setError(true);
            alert("Veuillez remplir tous les champs du formulaire avant de soumettre.");
            setTimeout(() => setError(false), 3000);
        }
    }

    function HandleChenges(e) {
        const {name, value} = e.target;
        e.target.style.color = "red";

        setTimeout(() => {
            e.target.style.color = "#e0e0e0";
        }, 300);
        
        if (name === "nom") {
            setNom(value);
        } else if (name === "prenom") {
            setPrenom(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "message") {
            setMessage(value);
        }
    }

    function handleReset() {
        const audio3 = document.getElementById("clickSound3");
        if (audio3) {
            audio3.currentTime = 0;
            audio3.play();
            setResetClicked(true);
            setTimeout(() => setResetClicked(false), 1000);
        }
        
        // Réinitialiser les champs du formulaire
        setNom("");
        setPrenom("");
        setEmail("");
        setMessage("");
    }

    useEffect(() => {
        const audio = document.getElementById("clickSound");
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    }, [nom, prenom, email, message]);

    return(
        <div>
            <audio id="clickSound" src="/typewriter.mp3" />
            <audio id="clickSound2" src="/roblox-old-winning-sound-effect.mp3" />
            <audio id="clickSound3" src="/realy-nygga.mp3" />
            <audio id="clickSound4" src="/hey-21.mp3" />
            
            <h2>Formulaire de Contact</h2>
            <form onSubmit={handleSubmit}>
                <table border="1" className="TableauFormulaire">
                    <tbody>
                        <tr>
                            <th colSpan="2">
                                <label>Veuillez nous contacter ci-dessous</label>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <label>Nom :</label>
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    name="nom" 
                                    value={nom} 
                                    onChange={HandleChenges} 
                                    required 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Prénom :</label>
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    name="prenom" 
                                    value={prenom} 
                                    onChange={HandleChenges} 
                                    required 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Email :</label>
                            </td>
                            <td>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={email} 
                                    onChange={HandleChenges} 
                                    required 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Message :</label>
                            </td>
                            <td>
                                <textarea 
                                    name="message" 
                                    value={message} 
                                    onChange={HandleChenges} 
                                    rows="4" 
                                    cols="30" 
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" onClick={handleReset}>
                                    Effacer
                                </button>
                            </td>
                            <td>
                                <button type="submit">
                                    Envoyer
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {resetClicked && (
                    <img 
                        src="/giphy.gif" 
                        alt="Merci" 
                        style={{ width: "200px", textAlign: "center", left: "auto" }} 
                    />
                )}
                {error && (
                    <img 
                        src="/giphysecond.gif" 
                        alt="Erreur" 
                        style={{ width: "200px", textAlign: "center", left: "auto" }} 
                    />
                )}
            </form>
        </div>
    );
}

export default FormContact;