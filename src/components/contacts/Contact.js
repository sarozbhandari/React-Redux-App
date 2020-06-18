import React from 'react';


const Contact = ({contact}) => {
    const {name, phone,email} = contact;
    return (
        <tr>
            <td>
                <div className = "custom-control custom-checkbox"> 
                   <input type = "checkbox" className = "custom-control-input" />
                    <label className = "custom-control-label"></label>
                </div>
            </td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
        </tr>
    )
}

export default Contact
