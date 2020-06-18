import React from 'react';


const Contact = (props) => {
    return (
        <tr>
            <td>
                <div className = "custom-control custom-checkbox"> 
                   <input type = "checkbox" className = "custom-control-input" />
                    <label className = "custom-control-label"></label>
                </div>
            </td>
            <td>{props.contact.name}</td>
            <td>{props.contact.phone}</td>
            <td>{props.contact.email}</td>
        </tr>
    )
}

export default Contact
