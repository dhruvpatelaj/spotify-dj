import React from "react";
import "./App.css";
import { Login } from "./components";

import axios from "axios";
import {
    spotifyAPI_url,
    client_id,
    client_secret,
    redirect_URI,
} from "./configs";

class App extends React.Component {
    state = {
        value: "SpotifyDJ",
        authToken: "",
        authorized: false,
    };

    componentDidMount = () => {
        let url = window.location.href;
        if (url.indexOf("token=") > -1) {
            let authToken = url.split("token=")[1].split("&")[0].trim();
            let authorized = true;
            this.setState({ authToken, authorized });
        }
    };

    authorize = () => {
        console.log("AUTHORIZE");
        window.location.assign(spotifyAPI_url);
    };
    render() {
        return (
            <div className="App">
                <h1> App.js </h1>
                <button onClick={this.authorize}>Log in</button>
                <h1> Test</h1>
            </div>
        );
    }
}

export default App;
