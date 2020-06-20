import React from 'react';
import { useSelector } from 'react-redux';
import Contact from './Contact';


const Contacts = () => {
    const contacts = useSelector((state) => state.contacts );
    return (
        <div>
            <table className="table shadow">
                <thead className = "bg-danger text-white">
                    <tr>
                    <th>
                        <div className = "custom-control custom-checkbox">
                            <input type = "checkbox" className = "custom-control-input" />
                            <label className = "custom-control-label"></label>
                        </div>
                    </th>
                    <th>Name</th>
                    <th>Phone No.</th>
                    <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((contact) => (
                            <Contact contact = {contact} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Contacts
