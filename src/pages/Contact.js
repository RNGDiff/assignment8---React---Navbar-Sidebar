import React from "react";
import "../styles/Contact.css";
function Contact() {
    return (
        <div className="contact">
            <h1>Contact</h1>
            <p>This is the contact page of the app.</p>
            <form>
                <input type="email" placeholder="Email"></input>
                <input type="text" placeholder="Subject"></input>
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;
