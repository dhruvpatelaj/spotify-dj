import React from "react";
import styles from "./Login.module.css";
import {
    spotifyAPI_url,
    client_id,
    client_secret,
    redirect_URI,
} from "../../configs";

const authorize = () => {
    console.log("AUTHORIZE");
    window.location.assign(spotifyAPI_url);
};

function Login() {
    return (
        <div className="container">
            <button onClick={authorize}>Log in</button>
        </div>
    );
}

export default Login;
