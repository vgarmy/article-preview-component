import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faXTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'

import './share.css'

function Share() {
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className='card__article_info_user_share'>
            {showPopup && <div className="card__article_info_user_share_popup" onClick={handleButtonClick}>
                <p className="card__article_info_user_share_popup_text">Share</p>
                <FontAwesomeIcon icon={faSquareFacebook} size="xl" />
                <FontAwesomeIcon icon={faXTwitter} size="xl" />
                <FontAwesomeIcon icon={faPinterest} size="xl" />
            </div>}
            <FontAwesomeIcon className="card__article_info_user_share_icon" icon={faShare} onClick={handleButtonClick} size="xl" />
        </div>
    );
}

export default Share;