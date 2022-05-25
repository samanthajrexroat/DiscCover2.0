import React from 'react'
import Footer from './Footer';
import Sidebar from './Sidebar';
import Body from './Body';
import Navbar from './Navbar';
import Container from '@mui/material/Container';

export default function Spotify() {
  return (
    <Container>
        <div className="spotify_body">
            <Sidebar />
            <div className="body">
                <Navbar />
                <div className="body_contents">
                    <Body />
                </div>
            </div>
        </div>
        <div className="spotify_footer">
            <Footer />
        </div>
    </Container>
  )
}

