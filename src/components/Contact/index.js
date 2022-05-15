import React, { useState, useRef } from "react";
import { validateEmail } from "../../utils/helpers";
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('Send me a message!');
    const { name, email, message } = formState;

    // when called checks to see what the status of the form fields are and returns the error message to be displayed
    const checkError = ({ name, email, message }) => {
        switch(true) {
            case (!name):
                return 'Please enter your name!';
            case (!validateEmail(email)):
                return 'Please enter a valid email address!';
            case (!message):
                return 'Please include a short message to me!';
            default:
                // clears error message if all fields are correctly popoulated
                return '';
        }
    }

    // handles whenever the users moves from one field to another and then sets the respective useState variables and sets the error message if needed
    const handleChange = (e) => {
        if (e.target.name === 'name' && !e.target.value) { setErrorMessage('A name is required!')}
        else if (e.target.name === 'email' && !validateEmail(e.target.value)) { setErrorMessage('Invalid email!')}
        else if (e.target.name === 'message' && !e.target.value) { setErrorMessage('A short message is required!')}
        else setErrorMessage('Send me a message!')
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    // handles when the user clicks on the submit button of the form
    const handleSubmit = (e) => {
        // prevents form from resetting
        e.preventDefault();
      
        // makes sure no data entry errors are present, if returns from function
        if (checkError(formState)) return

        // sends the form data via e ails through emailjs service, if successfull displays message for 1-sec and returns to home page
        emailjs.sendForm('service_k8hqz3q', 'template_q0gacl4', form.current, 'idAsBdkTidnBYg100')
          .then((result) => {
              setErrorMessage('Success!');
              setTimeout(() => {
                  window.location ="/";
              }, 1000)
          }, (error) => {
              setErrorMessage(error.text);
          });
      };

      

    // returns the jsx contact form component for the page
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
                    {/* displays an error message if present */}
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