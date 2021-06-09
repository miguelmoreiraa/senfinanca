import React from 'react';
import './styles.css';


function TitleType({ children, categoria }) {
    return (
        <div className="title-type">
            <label className="labelCategoria" categoria={categoria}></label>
            {children}
        </div>
    );
}

export default TitleType;