import React from 'react';
import cardLink from "../../img/card-link.svg";
import '../../styles/allBlog/allBlogCard.scss';
import {useNavigate} from "react-router-dom";
const AllBlogCard = (props) => {
    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate(`/blog/${props.blog.id}`)} className='allBlogCard'>
            <div className="smallCard__img">
                <img src={props.blog.img} style={{width:384,height:240}} alt=""/>
            </div>
            <div className="card__text">
                <p className='smallCard__info'>{props.blog.author} • {props.blog.date}</p>
                <div className="card__title">
                    <p className='card__title__text'>{props.blog.title}</p>
                    <img src={cardLink} alt=""/>
                </div>

                <p className='card__subtitle'>{props.blog.subtitle}</p>
                <div className="card__category">
                    <ul className='category__list'>
                        { props.blog.categories && props.blog.categories.map((category,index)=>
                        <li key={index} className='category__item'>{category}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AllBlogCard;