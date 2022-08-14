import React from 'react';

import logo from '../logo.svg';

export default function Information() {
    return (
        <div className="information">
            <img src={logo} className="profile-image" alt="image" />

            <div className="information--labels">
                <h2 className="profile--title">Zain Ul Abideen</h2>
                <h4 className="profile--position">Frontend Developer</h4>
                <h4 className="profile--website">example.com</h4>

                <button className="email--button">
                    Email
                </button>
            </div>
        </div>
    );
}