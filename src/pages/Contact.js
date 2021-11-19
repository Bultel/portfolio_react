import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import ButtonsBottom from '../components/ButtonsBottom';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';

const Contact = () => {
    return(
        <main>
        <div className = "contact">
            <Navigation/>
            <Logo/>
            <ContactForm/>
            <div className = "contact-infos">
                <div className = "address">
                    <div className = "content">
                        <h4>Adresse</h4>
                        <p>Avignon</p>
                        <p>68493 avignon</p>
                    </div>
                </div>
            
            <div className = "phone">
                <div className = "content">
                    <h4>Téléphone</h4>
                    {/* Librairie pour copier automatiquement */}
                    <CopyToClipboard text = "0667464254" className = "hover">
                        {/* fonction pour avertir en pop up la copie */}
                        <p style = {{cursor: 'pointer'}} className = "clipboard" onClick= {()=>{
                            alert("Téléphone copié");
                        }}
                        >06 67 46 42 54</p> 
                    </CopyToClipboard>
                </div>
            </div>
            <div className = "email">
                <div className = "content">
                    <h4>Email</h4>
                    <CopyToClipboard text = "bultelalexis@gmail.com" className = "hover">
                        {/* fonction pour avertir en pop up la copie */}
                        <p style = {{cursor: 'pointer'}} className = "clipboard" onClick= {()=>{
                            alert("Email copié");
                        }}
                        >bultelalexis@gmail.com</p> 
                    </CopyToClipboard>
                </div>
            </div>
            <SocialNetwork />
            <div className = "credits">
                <p>BULTEL Alexis - 2020</p>
            </div>
        </div>
        <ButtonsBottom left={'/projet-4'}/>
        </div>
        </main>
    );
};
export default Contact;