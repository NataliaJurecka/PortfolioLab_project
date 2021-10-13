import React, {useState} from 'react';
import decorUrl from "../../../assets/Decoration.svg";

function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <form>
            <div>
                <label>Wpisz swoje imię
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder='Imię'
                    />
                </label>
                <label>Wpisz swój email
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Email'/>
                </label>
            </div>
            <div>
                <label>Wpisz swoją wiadomość

                </label>
            </div>
        </form>

    );
}

export default ContactForm;