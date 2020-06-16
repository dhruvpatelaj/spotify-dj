import React from "react";
import "./App.css";
import { Login, Playback } from "./components";

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
            console.log("authorized!!!");
        }
    };

    render() {
        return (
            <div className="App">
                <h1> App.js </h1>
                {/* Hides the login button if unauthorized */}
                {!this.state.authorized && <Login />}
                {this.state.authorized && (
                    <Playback
                        auth={this.state.authorized}
                        token={this.state.authToken}
                    />
                )}
            </div>
        );
    }
}

export default App;
