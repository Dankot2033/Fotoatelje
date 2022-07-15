import {useState} from "react";

const ContactForm = () =>{

    const formSubmit = () => {
        console.log(this.state);
    }

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    return(
        <form>
            <h2>Kontakta oss</h2>

            <input type="text" id="name" name="name" placeholder="Namn" value={name} onChange={(e) => setName(e.target.value)}></input>

            <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

            <textarea id="message" name="message" placeholder="Meddelandet" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

            <input className="button" type="submit" value="Skicka" onClick={formSubmit}/>
        </form>
    );
}

export default ContactForm;