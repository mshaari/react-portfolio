import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const [formData, setFormData] = useState({message: "", user_email: "", user_name: ""});

    const handleFormChange = (e) => {
        e.preventDefault();

        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_62hg44u', 'template_6rsaccs', form.current, '4MeBdfIF5tDbY90qR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input value={formData.name} type="text" name="user_name" onChange={handleFormChange} required/>
            <label>Email</label>
            <input value={formData.email} type="email" name="user_email" onChange={handleFormChange} required/>
            <label>Message</label>
            <textarea value={formData.message} name="message" onChange={handleFormChange} required/>
            <input type="submit" value="Send" />
        </form>
    );
}

export default Contact;