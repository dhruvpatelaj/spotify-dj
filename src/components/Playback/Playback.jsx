import React, { useState } from "react";
import axios from "axios";
import {
    spotifyPlaylistURL,
    currentPlayers,
    playback_url,
} from "../../configs";

export const fetchPlayback = (token) => {
    const AuthStr = "Bearer ".concat(token);
    return axios.get(playback_url, {
        headers: { Authorization: AuthStr },
    });
};

var run10times = 0;
function Current(props) {
    const [currentPlayback, setCurrentPlayback] = useState([
        "None",
        "spotify.png",
    ]);

    if (run10times != 50 && props.auth) {
        run10times += 1;
        fetchPlayback(props.token).then(function (result) {
            //console.log(result.data);
            if (typeof result.data.item !== "undefined") {
                setCurrentPlayback([
                    result.data.item.name,
                    result.data.item.album.images[0],
                ]);
                console.log(currentPlayback);
            } else {
                setCurrentPlayback(["NOT PLAYING", "spotify.png"]);
            }
        });
    }

    return (
        <div>
            <h1> Current Song </h1>
            <h2> {currentPlayback[0]} </h2>
            <img src={currentPlayback[1]}></img>
        </div>
    );
}

export default Current;
