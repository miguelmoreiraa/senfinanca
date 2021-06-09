import React from 'react';
import './styles.css';


function TitleDate({ children, categoria }) {
    return (
        <div className="title-date">
            <label className="labelDate" categoria={categoria}></label>
            {children}
        </div>
    );
}

export default TitleDate;