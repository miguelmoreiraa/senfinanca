import React from 'react';
import './styles.css';


function TitlePrice({ children, categoria }) {
    return (
        <div className="title-price">
            <label className="labelPreco" categoria={categoria}></label>
            {children}
        </div>
    );
}

export default TitlePrice;