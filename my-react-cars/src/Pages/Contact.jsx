import react from "react";
import MenuAcceuil from "../Container/menuAcceuil";
import FormContact from "../Container/formContact";
import { useLocation } from "react-router-dom";
function Contact() {
    const location = useLocation()
    const isConnected = location.state?.isConnected || 'false'

    return(
        <div className="ContainerMenuAcceuil">
            <MenuAcceuil isConnected={isConnected ? true : false} />
            
            <FormContact />
        </div>
    )
}
export default Contact;