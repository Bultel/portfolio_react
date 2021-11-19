import React,{ useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bz42x3h', 'template_mcqcqsb', form.current, 'user_Zmo71HnvFquge5mQhR4CL')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

      }

  return (
    <form className="contact-form" onSubmit = {sendEmail} ref={form}>
      <h2>contactez-nous</h2>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="nom *"
        />
        <input
          type="text"
          id="company"
          name="company"
          placeholder="société"
        />
        <input
          type="text"
          id="phone"
          name="phone"
          
          placeholder="téléphone"
         
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            
            
            placeholder="email *"
            
          />
        </div>
        <textarea
          id="message"
          name="message"
          
          placeholder="message *"
          
        />
      </div>
      <input
        className="button hover"
        type="submit"
        value="envoyer"
      />
      <div className="form-message"></div>
    </form>
  );
};

export default ContactForm;
