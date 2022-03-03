import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {


    
    const [counter, setCounter] = useState(value); // retorna un arreglo con dos valores [].

    console.log(counter, setCounter);


    //handleAdd

    const handleAdd = () =>{
        // setCounter( counter + 1);
        setCounter( (c) => c +1 )
    } 

    // handleSubstract
    const handleSubtract = () => {
        setCounter( (e) => e -1 );
    }

    // handleReset 
    const handleReset = () => {
        setCounter(value);
    }


    return (
    <>
        <h1>Counter APP</h1>
        <h2>{counter}</h2>
    <button onClick={ handleAdd } >+1</button>
    <button onClick={ handleReset }>Reset</button>
    <button onClick={ handleSubtract }>-1</button>
    </>
    );
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}



export default CounterApp;