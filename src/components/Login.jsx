import React from "react";
import {Button, Container} from "@mui/material";


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
		<Container sx={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			height: '100%',
			width: '100%',
			gap: '5rem',
		}}>
			<img height="150" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="spotify" />
			<Button 
				sx={{
					padding: '1rem 5rem',
					borderRadius: '5rem',
					border: 'none',
					backgroundColor: 'black',
					color: '#49f585',
					fontSize: '1.2rem',
					cursor: 'pointer'
				}}
				variant="contained" 
				onClick={handleClick}>
				Connect to Spotify and DiscCover
			</Button>
		</Container>
	);
}
