import React from "react";
import Navbar from "../Container/menuAcceuil";

function Myconnexion(){


    return(
        <div>
            <Navbar />
            <form>
                <table className="TableauFormulaire">
                <tr>
                    <th>
                        Email
                    </th>
                    <td>
                        <input type="email" name="email" id="" />
                    </td>
                </tr>
                <tr>
                    <th>
                        Mot de passe
                    </th>
                    <td>
                        <input type="password" name="password" />
                    </td>
                </tr>
                </table>
            </form>
        </div>
        
            
    )
}

export default Myconnexion; 