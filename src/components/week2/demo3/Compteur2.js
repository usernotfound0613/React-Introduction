import { useState } from 'react';

function MyButton({count, onClick}){
    return(
        <button onClick={onClick}>
            Count: {count}
        </button>
    );
}

export default function Compteur1(){
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count+1)
    }

    return(
        <>
            <p> Compteur mis a jour sperarement avec useState</p>
            <MyButton count={count} onClick={handleClick}/>
            <MyButton count={count} onClick={handleClick}/>
        </>
    );
}