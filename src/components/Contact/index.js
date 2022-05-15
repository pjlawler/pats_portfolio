import React, { useState, useRef } from "react";
import { validateEmail } from "../../utils/helpers";
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleChange(e) {
        console.log(formState);
        switch (e.target.name) {
            case 'name':
                formState.name = e.target.value;
                break;
            case 'email':
                formState.email = e.target.value;
                break;
            case 'message':
                formState.message = e.target.value;
                break;
        }
        checkError();
    }

    const checkError = () => {
        
        if(!formState.name || !formState.message) setErrorMessage('Missing data')
        else if(!validateEmail(formState.email)) setErrorMessage('Invalid eMail')
        else setErrorMessage('')
    }

   console.log(formState);

    const handleSubmit = (e) => {
        e.preventDefault();
      
        if(errorMessage) return 
        emailjs.sendForm('service_k8hqz3q', 'template_q0gacl4', form.current, 'idAsBdkTidnBYg100')
          .then((result) => {
              setErrorMessage('Success!');
              setTimeout(() => {
                  window.location ="/";
              }, 2000)
          }, (error) => {
              setErrorMessage(error.text);
          });
      };


    return (
        <div>
            <section className="my-5">
            <h3 className='page-header'>Contact Me</h3>
            <div className='contact'>
                <form ref={form} id="contact-form" onSubmit={handleSubmit}>
                    <div className="form-textInput">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" onBlur={handleChange} defaultValue={name} />
                    </div>
                    <br />
                    <div className="form-textInput">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" onBlur={handleChange} defaultValue={email} />
                    </div>
                    <br />
                    <div className="form-textArea">
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" onBlur={handleChange} defaultValue={message} rows="5"  />
                    </div>
                    <br />
                    {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                        <br />
                    </div>
                    )}
                    <button type='submit'>Submit</button>
                </form>
            </div>
            </section>
        </div>

    )
}


export default Contact;