export default function MyButton(){
    function handleClick(){
        alert("Bravo ! tu gagns 1 000 000 000 $.")
    }

    return(
        <>
            <button onClick={handleClick}>
                Click Here
            </button>
        </>
    );
}