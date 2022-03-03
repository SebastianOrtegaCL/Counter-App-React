import React from 'react';
import PropTypes from 'prop-types';

// import { Fragment } from "react";


const PrimeraApp = ( {saludo, subtitulo} ) => {

  
    // const saludo = {
    //     name: 'Jake',
    //     age: 34,
    // };
    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo,null,3)}</pre> */}
                <p>{ subtitulo }</p>

        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    
};

PrimeraApp.defaultProps = {
    subtitulo: 'I am a subtitle'
    // subtitulo: ''
}

export default PrimeraApp;
