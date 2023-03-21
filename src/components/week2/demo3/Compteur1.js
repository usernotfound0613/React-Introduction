 import { useState } from 'react';

function MyButton(){
    const [count, setCount] = useState(0);


    function handleClick(){
        setCount(count+1)
    }

    return(
        <button onClick={handleClick}>
            Count: {count}
        </button>
    );
}

export default function Compteur1(){
    return(
        <>
            <p> Compteur mis a jour sperarement avec useState</p>
            <MyButton/>
            <MyButton/>
        </>
    );
}