import React, {useState} from 'react';
import {useDispatch } from 'react-redux';
import {addContact} from '../../redux/actions/contactAction';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';


const AddContact = () => {
    const dispatch = useDispatch()
    let history = useHistory();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const createContact = (e) => {
        e.preventDefault();
        const newContact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email,
        }
        dispatch(addContact(newContact));
        history.push("/");

    }

    return <div className = "card border-0 shadow">
        <div className = "card-header">
            Add Contacts
        </div>
        <div className = "card-body">
            <form onSubmit = {(e)=> createContact(e)}>
                <div className = "form-group">
                    <input
                        type = "text"
                        className = "form-control"
                        placeholder = "Enter Your Name Here"
                        value = {name}
                        onChange = {(e) => setName(e.target.value)}
                    />
                </div>
                <div className = "form-group">
                    <input 
                        type = "text"
                        className = "form-control"
                        placeholder = "Enter Your Phone Number Here"
                        value = {phone}
                        onChange = {(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className = "form-group">
                    <input 
                        type = "text"
                        className = "form-control"
                        placeholder = "Place Your E-mail Here"
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                </div>
                <button className = "btn btn-primary" type = "submit">Submit</button>
            </form>
        </div>
    </div>
}

export default AddContact;
