import React from 'react';
import './styles.css';


function TitleForm({ children, name }) {
    return (
        <div className="title">
            <label
                name={name}
            >
            </label>
            {children}
        </div>
    );
}

export default TitleForm;