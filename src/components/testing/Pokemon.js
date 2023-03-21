import { useState } from 'react';
import { pokemon } from './data/pokemon';
import './styles/pokemon.css';


function Pokemon() {
    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false)

    let object = pokemon[index]

    let before = index > 0;
    let after = index < pokemon.length - 1;


    function checkButtonBefore() {
        index > 0 ? setIndex(index - 1) : setIndex(index)
    }

    function checkButtonAfter() {
        index < (pokemon.length - 1) ? setIndex(index + 1) : setIndex(index)
    }

    function checkShowMore() {
        showMore !== true ? setShowMore(true) : setShowMore(false)
    }

    return (
        <>

            <button
                className="pkm-button"
                disabled={!before}
                onClick={() => checkButtonBefore()}>
                Before
            </button>

            <button
                className="pkm-button"
                disabled={!after}
                onClick={() => checkButtonAfter()}>
                After
            </button>


            <div>
                <h1 className='pkm-text-effect'>{object.name} (No {object.index})</h1>
                <img className="pkm-img-background" src={object.link} alt="" />
            </div>


            <button
                className="pkm-button"
                onClick={() => checkShowMore()}>
                Show {object.name} informations
            </button>

            {
                showMore === true ? <div><p>{object.describe}</p></div> : <div></div>
            }


        </>
    );
}
export default Pokemon