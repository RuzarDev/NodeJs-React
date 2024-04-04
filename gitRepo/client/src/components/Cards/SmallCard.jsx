import React from 'react';
import cardImg from '../../img/smallCardImg.png'
import cardLink from "../../img/card-link.svg";
import '../../styles/Cards/cardSmall.scss'
const SmallCard = () => {
    return (
        <div className='smallCard'>
            <div className="smallCard__img">
                <img src={cardImg} alt=""/>
            </div>
            <div className="card__text">
                <p className='smallCard__info'>Phoenix Baker • 1 Jan 2023</p>
                <div className="card__title">
                    <p className='card__title__text'>Migrating to Linear 101</p>
                    <img src={cardLink} alt=""/>
                </div>

                <p className='card__subtitle'>Linear helps streamline software projects, sprints, tasks, and bug
                    tracking. Here’s how to get...</p>
                <div className="card__category">
                    <ul className='category__list'>
                        <li className="category__item">Design</li>
                        <li className="category__item">Research</li>
                        <li className="category__item">Presentation</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SmallCard;