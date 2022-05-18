import React from 'react'
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function Spotify() {
  return (
    <div>
        <div className="spotify_body">
            <Sidebar />
            <div className="body">
                
                <div className="body_contents">
                    
                </div>
            </div>
        </div>
        <div className="spotify_footer">
            <Footer />
        </div>
    </div>
  )
}

