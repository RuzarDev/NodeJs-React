import React from 'react';
import post from "../../img/post1.png";
import cardLink from "../../img/card-link.svg";
import '../../styles/Cards/cardMiddle.scss'
const PostCardMiddle = () => {
    return (
        <div className="post__card">
            <img className="card-img" src={post} alt=""/>
            <p className='card__info'>Olivia Rhye • 1 Jan 2023</p>
            <div className="card__title">
                <p className='card__title__text'>UX review presentations</p>
                <img src={cardLink} alt=""/>
            </div>

            <p className='card__subtitle'>How do you create compelling presentations that wow your colleagues and
                impress your managers?</p>
            <div className="category">
                <ul className='category__list'>
                    <li className="category__item">Design</li>
                    <li className="category__item">Research</li>
                    <li className="category__item">Presentation</li>
                </ul>
            </div>
        </div>
    );
};

export default PostCardMiddle;