import React from 'react';
import './styles.css';


function Input({ children, name, type, value, register, ...props }) {
    return (

        <input
            className="input"
            name={name}
            type={type}
            value={value}
            {...props}
        >
            {children}
        </input>

    );
}

export default Input;