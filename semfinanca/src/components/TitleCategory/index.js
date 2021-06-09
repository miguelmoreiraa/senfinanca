import React from 'react';
import './styles.css';


function TitleCategory({ children, titulo }) {
    return (
        <div className="title-category">
            <label className="label-titulo" titulo={titulo}></label>
            {children}
        </div>
    );
}

export default TitleCategory;