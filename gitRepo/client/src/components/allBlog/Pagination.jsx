import React from 'react';

const Pagination = ({handlePageClick,blogs,activePage}) => {
    return (
        <div style={{display: "flex", justifyContent: "center", marginTop: 50}}>
            <div className="pagination">
                {Array.from({length: blogs.totalPages}, (_, index) => (
                    <a
                        key={index}
                        onClick={() => handlePageClick(index + 1)}
                        className={index + 1 === activePage ? "page-btn active" : "page-btn"} // Добавляем класс "active" для активной страницы
                    >{index + 1}</a>
                ))}
            </div>
        </div>
    );
};

export default Pagination;