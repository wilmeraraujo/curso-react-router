import React from "react";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";

function LoginPage() {
    const auth = useAuth();
    const [username, setUsername] = React.useState('');
    const login = (e) => {
        e.preventDefault();
        //console.log(username);
        auth.login({username});
    };
    if (auth.user){
        return <Navigate to='/profile'/>
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={login}>
                <label>Nombre de usuario:</label>
                <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Ingresar</button>
            </form>
        </>
    );
}

export { LoginPage };