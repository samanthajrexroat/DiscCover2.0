import { useEffect, useState } from "react";
import './App.css';

function App() {
  const CLIENT_ID = "1f33e40894594d7c93b098294c00728c"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState (" ")

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem(token)

    if (!token && hash) {
      token = hash.substring(1).split("&").find((elem) => elem.startsWith("access_token")).split("=")[1]

      console.log(token)
    } 
  }, [])



  return (
    <div className="App">
      <header className="App-header">
      <h1>DiscCover Music 2.0</h1>
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
      </header>
    </div>
  );
}

export default App;
