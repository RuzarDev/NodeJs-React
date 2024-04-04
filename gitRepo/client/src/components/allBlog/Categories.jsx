import React from 'react';

const Categories = ({setFilter}) => {
    return (
        <div className="categories">
            <ul className='categories__list'>
                <li onClick={(e) => setFilter(e.target.id)} className='categories__item' id="All">All</li>
                <li onClick={(e) => setFilter(e.target.id)} id="Leadership" className='categories__item'>Leadership</li>
                <li onClick={(e) => setFilter(e.target.id)} className='categories__item' id="Management">Managment</li>
                <li onClick={(e) => setFilter(e.target.id)} className='categories__item' id="Team building">team
                    building
                </li>
                <li onClick={(e) => setFilter(e.target.id)} className='categories__item'
                    id="Communication">communication
                </li>
            </ul>
        </div>
    );
};

export default Categories;