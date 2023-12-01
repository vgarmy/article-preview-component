import React, { useState, useEffect  } from 'react';
import './sharesmall.css'
import Avatar from '../../images/avatar-michelle.jpg'
import Share from '../share/Share'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faXTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'

const Sharesmall = () => {

    const [fieldContent, setFieldContent] = useState(<div className='card__article_info_user'>
    <div className='card__article_info_user_info'>
      <div className='card__article_info_user_info_avatar'>
        <img src={Avatar} alt="Avatar" />
      </div>
      <div className='card__article_info_user_info_user'>
        <p className='card__article_info_user_info_name'>Michelle Appleton</p>
        <p className='card__article_info_user_info_date'>28 Jun 2020</p>
      </div>
    </div>
    <Share />
  </div>);
  const [isClicked, setIsClicked] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > 925) {
        // Revert to initial content when screen size is larger than 600px
        setFieldContent(<div className='card__article_info_user'>
          <div className='card__article_info_user_info'>
            <div className='card__article_info_user_info_avatar'>
              <img src={Avatar} alt="Avatar" />
            </div>
            <div className='card__article_info_user_info_user'>
              <p className='card__article_info_user_info_name'>Michelle Appleton</p>
              <p className='card__article_info_user_info_date'>28 Jun 2020</p>
            </div>
          </div>
          <Share />
        </div>);
        setIsClicked(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleFieldClick = () => {
    if (screenWidth <= 925) {
      if (!isClicked) {
        setFieldContent(<div className='card__article_info_user toggled'>
          <div className='card__article_info_user_info'>
            <p className="card__article_info_user_share_popup_text">Share</p>
            <FontAwesomeIcon icon={faSquareFacebook} size="2xl" className='white_icon' />
            <FontAwesomeIcon icon={faXTwitter} size="2xl" className='white_icon' />
            <FontAwesomeIcon icon={faPinterest} size="2xl" className='white_icon' />
          </div>
          <Share />
        </div>);
      } else {
        setFieldContent(<div className='card__article_info_user'>
          <div className='card__article_info_user_info'>
            <div className='card__article_info_user_info_avatar'>
              <img src={Avatar} alt="Avatar" />
            </div>
            <div className='card__article_info_user_info_user'>
              <p className='card__article_info_user_info_name'>Michelle Appleton</p>
              <p className='card__article_info_user_info_date'>28 Jun 2020</p>
            </div>
          </div>
          <Share />
        </div>);
      }
      setIsClicked(!isClicked); // Toggle the clicked state
    }
  };


  return (
    <span onClick={handleFieldClick}>
        {fieldContent}
  </span>
  )
}

export default Sharesmall