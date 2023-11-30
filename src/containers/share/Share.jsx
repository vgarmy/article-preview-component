import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faXTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'

import './share.css'

function Share() {
    const [showPopup, setShowPopup] = useState(false);

    const handleMouseEnter = () => {
        setShowPopup(true);
    };

    const handleMouseLeave = () => {
        setShowPopup(false);
    };


    return (
        <div className='card__article_info_user_share'>
            {showPopup && <div className="card__article_info_user_share_popup" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <p className="card__article_info_user_share_popup_text">Share</p>
                <FontAwesomeIcon icon={faSquareFacebook} size="2xl" />
                <FontAwesomeIcon icon={faXTwitter} size="2xl" />
                <FontAwesomeIcon icon={faPinterest} size="2xl" />
            </div>}
            <FontAwesomeIcon className="card__article_info_user_share_icon" icon={faShare} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} size="xl" />
        </div>
    );
}

export default Share;