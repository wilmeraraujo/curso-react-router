import React from "react";
import { useAuth } from "./auth";

function LogoutPage() {
    const auth = useAuth();
 
    const logout = (e) => {
        e.preventDefault();
        //console.log('logout');
        auth.logout();
    };
    return (
        <>
            <h1>Logout</h1>
            <form onSubmit={logout}>
                <label>Desea salir?</label>
                <button type="submit">Salir</button>
            </form>
        </>
    );
}

export { LogoutPage };