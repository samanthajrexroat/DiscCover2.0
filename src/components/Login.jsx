import React from "react";
import Button from "@mui/material/Button";

export default function Login() {
	const handleClick = () => {
		const clientId = "0359b4628eff473aa3845937439a1ac4";
		const redirectUrl = "http://localhost:3000/";
		const apiUrl = "https://accounts.spotify.com/authorize";
		const scope = [
			"user-read-email",
			"user-read-private",
			"user-modify-playback-state",
			"user-read-playback-state",
			"user-read-currently-playing",
			"user-read-recently-played",
			"user-read-playback-position",
			"user-top-read",
		];
		window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope${scope.join(" ")}&response_type=token&show_dialog=true`;
	};

	return (
		<div>
			<img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="spotify" />
			<Button variant="contained" onClick={handleClick}>
				Connect to Spotify
			</Button>
		</div>
	);
}
