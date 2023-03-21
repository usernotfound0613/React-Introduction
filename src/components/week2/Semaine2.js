 import ShoppingList from './demo1/ShoppingList'
import PeopleList from './demo2/PeopleList';
import MyButton from './demo3/MyButton';
import Compteur1 from './demo3/Compteur1';
import Compteur2 from './demo3/Compteur2';
 
 export default function Semaine2(){
    return(
        <>
            <h1>Semaine 2</h1>
            <h2>Demo 1: Les listes</h2>
            <ShoppingList />

            <br/><br/>

            <h1>Semaine 2</h1>
            <h2>Demo 2: Les listes</h2>
            <PeopleList/>

            <br/><br/>

            <h1>Semaine 2</h1>
            <h2>Demo 3: Les Hooks</h2>
            <MyButton/>
            <Compteur1/>           
            <Compteur2/>
                
            <br/><br/>
        </>
    );
 }