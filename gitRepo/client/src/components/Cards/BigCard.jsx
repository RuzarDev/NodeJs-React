import React from 'react';
import cardLink from "../../img/card-link.svg";
import '../../styles/Cards/cardBig.scss'
import cardImg from '../../img/bigcard.png'
const BigCard = () => {
    return (
        <div className='BigCard'>
            <div className="smallCard__img">
                <img src={cardImg} alt=""/>
            </div>
            <div className="card__text">
                <p className='smallCard__info'>Phoenix Baker • 1 Jan 2023</p>
                <div className="card__title">
                    <p className='card__title__text'>Grid system for better Design User Interface</p>
                    <img src={cardLink} alt=""/>
                </div>

                <p className='card__subtitle'>A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.</p>
                <div className="card__category">
                    <ul className='category__list' style={{marginTop:60}}>
                        <li className="category__item">Design</li>
                        <li className="category__item">Research</li>
                        <li className="category__item">Presentation</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BigCard;