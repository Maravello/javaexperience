
import MenuAcceuil from "../Container/menuAcceuil";
import FormContact from "../Container/formContact";

function Contact() {


    return(
        <div className="ContainerMenuAcceuil">
            <MenuAcceuil isConnected={localStorage.length > 0} />
            
            <FormContact />
        </div>
    )
}
export default Contact;