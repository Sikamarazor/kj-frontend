import React from 'react';
import "./footer.css";

function Footer() {

    const today = new Date();
    var year = today.getFullYear();

    return (
        <footer className="footer">
            <div className="text-center">
                © { year } Copyright; KJD. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;