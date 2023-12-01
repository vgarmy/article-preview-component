import React from 'react';
import './card.css'
import Drawers from '../../images/drawers.jpg'
import Sharesmall from '../sharesmall/Sharesmall';

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
        <Sharesmall />
      </div>
    </div>
  )
}

export default Card