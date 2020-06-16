import React from "react";
import axios from "axios";
import {
    spotifyPlaylistURL,
    currentPlayers,
    playback_url,
} from "../../configs";

export const fetchPlayback = async (token) => {
    const AuthStr = "Bearer ".concat(token);
    axios
        .get(playback_url, { headers: { Authorization: AuthStr } })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

/**
 * 
 * const AuthStr = 'Bearer '.concat(USER_TOKEN); 
axios.get(URL, { headers: { Authorization: AuthStr } })
 .then(response => {
     // If request is good...
     console.log(response.data);
  })
 .catch((error) => {
     console.log('error ' + error);
  });

 */

function Current(props) {
    if (props.auth) {
        fetchPlayback(props.token);
    }
    return (
        <div>
            <h1> Current Song </h1>
        </div>
    );
}

export default Current;
