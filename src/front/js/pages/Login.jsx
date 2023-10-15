import React, { useContext } from "react";
import{ Context } from "../store/appContext"


export const Login = (event) => {
   const {store, actions} = useContext(Context);
   
   const handlelogin = (event) => {
    event.preventDefault;
    console.log("function handlelogin");
    actions.login("email", "password");
    }

    return (
        <form onSubmit={handleLogin}>
            <button type="submit">Click me!</button>
        </form>
    )
}
