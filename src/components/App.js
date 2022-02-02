import React, {useState} from 'react';

function App() {

    const [number, generateRandom] = useState(0);

    const onButtonClick =() =>
    {
        const newNumber =  parseInt(Math.random()*1000);
        generateRandom(newNumber);
    }

    return (
        <div>
            <button onClick={onButtonClick}>click Me to generate a random number</button>
            <div>Number: {number}</div>
        </div>
    )
}

export default App; 
