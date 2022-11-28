import React from "react";

let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }
        // check for access token match
        const accessToken = window.location.href.match(/access_token=([^&]*)/)
    }
}

export default Spotify;