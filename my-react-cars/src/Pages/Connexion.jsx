import React,{useState,useEffect} from "react";
import Navbar from "../Container/menuAcceuil";
import "../StyleEverywhere/Stylish.css";

function Myconnexion(){

    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")


    async function VerifyInput(){
        if(email != null && email.length()>0 &&  password != null && password.length()>0){
            data = await fetch()
        }else{
            alert("Veuillez remplir correctement les champs")
        }
    }
    useEffect(()=>{
        const sound = document.getElementById("clickSound");
        if(sound){
            sound.currentTime = 0;
            sound.play()
        }

    },[email,password])
    return(
        <div>
            <Navbar />
            <audio id="clickSound" src="/typewriter.mp3" />
            <form >
                <table>
                <tr>
                    <th>
                        Email
                    </th>
                    <td>
                        <input type="email" name="email" id="" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <th>
                        Mot de passe
                    </th>
                    <td>
                        <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="submit" onClick={VerifyInput} />
                    </td>
                </tr>
                </table>
            </form>
        </div>
        
            
    )
}

export default Myconnexion; 