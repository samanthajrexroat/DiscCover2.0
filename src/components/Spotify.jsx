import React from 'react'
import Footer from './Footer';
import Sidebar from './Sidebar';
import Body from './Body';
import Navbar from './Navbar';

export default function Spotify() {
  return (
    <div>
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
    </div>
  )
}

