import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const [formData, setFormData] = useState({ message: "", user_email: "", user_name: "" });

    // useState hook variables for state of inputs (valid or invalid, i.e. true or false)
    const [messageState, setMessageState] = useState(undefined);
    const [emailState, setEmailState] = useState(undefined);
    const [nameState, setNameState] = useState(undefined);

    //useState hook variables for an alert that will appear if they enter an invalid name/email/message
    const [nameAlert, setNameAlert] = useState('');
    const [emailAlert, setEmailAlert] = useState('');
    const [messageAlert, setMessageAlert] = useState('');


    // // Check email
    // const checkEmail = (e) => {
    //     var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //     if (e.target.value.match(regex)) {
    //         setEmailState(true);
    //         return;
    //     } else {
    //         window.alert("invalid email");
    //         return;
    //     }
    // };

    // const checkName = (e) => {
    //     if (e.target.value !== "") {
    //         setNameState(true);
    //         return;
    //     } else {
    //         window.alert("invalid name");
    //         return;
    //     }
    // };

    // const checkMessage = (e) => {
    //     if (e.target.value !== "") {
    //         setMessageState(true);
    //         return;
    //     } else {
    //         window.alert("invalid name");
    //         return;
    //     }
    // };

    const handleFormChange = (e) => {
        e.preventDefault();

        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBlur = (e) => {
        // Check if the input field is empty
        if (e.target.value === '') {
            // If the input field is empty, alert the user
            if (e.target.name === "user_name") {
                setNameState(false);
                setNameAlert(<p>Please enter a valid name.</p>)
            } else if (e.target.name === "user_email") {
                setEmailState(false);
                setEmailAlert(<p>Please enter a valid email.</p>)
            } else if (e.target.name === "message") {
                setMessageState(false);
                setMessageAlert(<p>Please enter a valid message.</p>)
            }
        } else { //If they did enter an email, now we need to make sure the email is actually valid
            const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (e.target.value.match(regex)) {
                setEmailState(true);
                return;
            } else {
                setEmailState(false);
                setNameAlert(<p>Please enter a valid email.</p>);
            }
        }

    };


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_62hg44u', 'template_6rsaccs', form.current, '4MeBdfIF5tDbY90qR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setFormData({ message: "", user_email: "", user_name: "" });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input value={formData.name} type="text" name="user_name" onChange={handleFormChange} onBlur={handleBlur} id={'name' + nameState} required />
            {nameAlert}
            <label>Email</label>
            <input value={formData.email} type="email" name="user_email" onChange={handleFormChange} onBlur={handleBlur} id={'email' + emailState} required />
            {emailAlert}
            <label>Message</label>
            <textarea value={formData.message} name="message" onChange={handleFormChange} onBlur={handleBlur} id={'message' + messageState} required />
            {messageAlert}
            <input type="submit" value="Send" />
        </form>
    );
}

export default Contact;