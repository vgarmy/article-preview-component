import React from 'react'
import './card.css'
import Drawers from '../../images/drawers.jpg'
import Avatar from '../../images/avatar-michelle.jpg'
import Share from '../share/Share'

const Card = () => {
  return (
    <div className='card__article'>
      <div className='card__article_image'>
        <img src={Drawers} alt="Drawers" />
      </div>
      <div className='card__article_info'>
        <h1>Shift the overall look and feel by adding these wonderful
          touches to furniture in your home</h1>
        <p>Ever been in a room and felt like something was missing? Perhaps
          it felt slightly bare and uninviting. I’ve got some simple tips
          to help you make any room feel complete.</p>
        <div className='card__article_info_user'>
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
        </div>
      </div>
    </div>
  )
}

export default Card