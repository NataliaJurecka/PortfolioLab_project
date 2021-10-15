import React, {useState} from 'react';
import decorUrl from "../../../assets/Decoration.svg";

function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <form className='whole-form'>
            <div className='form_first_section'>
                <label className='input_box_info'>Wpisz swoje imię
                    <input
                        className='input_box'
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder='Imię'
                    />
                </label>
                <label className='input_box_info'>Wpisz swój email
                    <input
                        className='input_box'
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Email'/>
                </label>
            </div>
            <div className='input_box_large'>
                <label className='input_box_info'>Wpisz swoją wiadomość
                    <textarea
                        className='textarea'
                        placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'>
                    </textarea>
                </label>
            </div>
            <input
                className="btn_4"
                type="submit"
                value="Wyślij" />
        </form>

    );
}

export default ContactForm;