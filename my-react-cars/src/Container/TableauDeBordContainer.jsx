
import Navbar from "../Container/menuAcceuil"
import {  useNavigate } from "react-router-dom";

function TBDcontainer(props){
    let aujd = new Date();
    const year = aujd.getFullYear();
    const month = aujd.getMonth() + 1; // +1 car janvier = 0
    const day = aujd.getDate(); // Utilisez getDate(), pas getDay()
    let text = `\t \t \t \t Voiture de  ${props.Prenom}  ${props.Nom}  \n`
    const random = Math.random()* 9 + Math.random()* 9 + Math.random()* 9 + Math.random()* 9 

    const date = `${day}/${month}/${year}`;
    const redirection = useNavigate();
    const ListeVoitures = JSON.parse(localStorage.getItem("ListeVoitures"))

   
  function createTextFile() {
  text += ListeVoitures.map(voiture => 
    `\n ///////////////// \n Id: ${voiture.id} \n Modèle: ${voiture.modele} \n Marque: ${voiture.marque} \n Immatriculation: ${voiture.immatriculation} \n ///////////////// \n`
  ).join(''); // Concatène tous les éléments du tableau

  text+= "\t \t \t \tEnvoyer votre fichier via la page contacte pour traité vortre demande   \n \n"
  text+= `\n \t \t \t Crated the ${date}, Devis n° FR${random}`
  const blob = new Blob([text], { type: 'text/plain' }); // Créez le blob ici
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Vos-voiture.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  const audio = document.getElementById("myaudio");

  if(audio){
    audio.play()
    alert("Merci pour votre confiance")
    localStorage.removeItem("ListeVoitures")
    window.location.reload()
  }

  
}
    const handleRedirect = () => {
    redirection("/");
  };
    function heDisconnected()
    {
        localStorage.clear();
        handleRedirect()
    }
    return(
        <div>
            <audio src="./roblox-old-winning-sound-effect.mp3"  id="myaudio"/>
            <Navbar  isConnected={localStorage.length > 0} />
                        <h1>Bonjour {props.Prenom} {props.Nom}  </h1>
         <h5 style={{textAlign:"center"}}>*De nouvelles fonctionnalité seront à venir*</h5>
         
                {ListeVoitures ? 
                <div>
                    <h3 style={{textAlign: "center"}}><u>Récapitulatif de vos voiture demandée.</u></h3>
                    <table border={1}  id="Mytable">
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            marque
                        </th>
                        <th>
                            modele
                        </th>
                         <th>
                            immatriculation
                        </th>
                    </tr>
                    
                        
                            {ListeVoitures.map((voiture) =><tr><td>{voiture.id}</td><td>{voiture.marque}</td><td>{voiture.modele}</td><td>{voiture.immatriculation}</td></tr>)}
                       
                    
                </table>
                
                <button style={{backgroundColor: "blue", borderRadius: "20px", width: "100%", justifyContent: "center", display: 'flex'}} onClick={createTextFile}>Enregistrer vos voitures</button>
                </div>: <div><h5>Vous pouvez ajouter des voiture depuis acceuil pour avoir un devis</h5></div>}


        <button type="submit" style={{justifyContent: "center", alignItems: "center",display: "flex", backgroundColor: "red", width: "100%"}} onClick={heDisconnected}>Déconnexion</button>
        
       
        </div>
  
    )
}


export default TBDcontainer;