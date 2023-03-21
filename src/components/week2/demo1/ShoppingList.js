import { listeProduits } from "./data/produits";

const listItems = listeProduits.map(product => 
    <li
        key={product.id}
        style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
    >
        {product.title}
    </li>
    );

export default function ShoppingList(){
    return(
        <>
            <ul>{listItems}</ul>
        </>
    );
}