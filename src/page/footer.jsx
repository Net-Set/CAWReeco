import React from 'react';

function Footer() {
    return (
        <footer className="text-center text-white fixed-bottom" style={{ backgroundColor: '#444',marginTop:'50px' }}>
            <div className="container p-4">
                {/* Your content here */}
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright:
                <a className="text-white" href="https://somilmerugawar.com/">Somil Merugawar</a>
            </div>
        </footer>
    );
}

export default Footer;
