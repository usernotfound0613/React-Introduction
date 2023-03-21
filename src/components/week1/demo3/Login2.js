
import AdminPanel from "./AdminPanel";
import LoginPanel from "./LoginPanel";

export default function Login(){
    let isLoggedIn = false;
    let nom = "Mathieu"
    let data = null;

    return(
        <>
          <div> { isLoggedIn ? <AdminPanel/> : <LoginPanel/>} </div>
          <div> { nom === "admin" && <p>Tu es un dev React</p>} </div>
          <div> {data && "salut"} </div>
        </>
    );

}