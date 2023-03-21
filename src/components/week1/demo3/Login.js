
import AdminPanel from "./AdminPanel";
import LoginPanel from "./LoginPanel";

export default function Login(){
    let isLoggedIn = false;
    let content;
    
    if(isLoggedIn){
         content = <AdminPanel/>;
    }
    else{
        content = <LoginPanel/>;
    }

    return(
        <>
            {content}
        </>
    );

}