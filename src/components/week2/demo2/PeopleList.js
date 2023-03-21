import { people } from "./data"; 
import { getImageUrl} from "./utils";
import './PeopleList.css'

const listesUser = people.map(user => 
    <li
        key={user.id}
    >
        <img src={getImageUrl(user)} alt={user.name}/>
        <div>
            <strong>{user.name}</strong>: {user.profession} connu pour {user.accomplishment}
        </div>
    </li>
);


export default function PeopleList(){
    return(
        <>
            <ul> {listesUser} </ul>
        </>
    );
}