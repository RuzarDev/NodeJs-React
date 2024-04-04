import React, { useState, useEffect } from 'react';
import '../../styles/allBlog/allBlogCard.scss';
import AllBlogCards from "./AllBlogCards";
import Pagination from "./Pagination";
import AllBlogHeader from "./AllBlogHeader";

const AllBlog = () => {
    const [search, setSearch] = useState({ query: '', clicked: false });
    const [blogs, setBlogs] = useState({ posts: [], totalPages: 0 }); // Initialize totalPages
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);
    const [allBlogs, setAllBlogs] = useState([]);
    const [filter, setFilter] = useState('All');
    const [activePage, setActivePage] = useState(1); // Добавляем состояние для отслеживания активной страницы

    useEffect(() => {
        fetch(`http://localhost:3000/posts?page=1&perPage=2000`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setAllBlogs(data.posts);
                setBlogs(data); // Set blogs including totalPages
            })
            .catch(error => console.error('Error fetching blogs:', error));

    }, []);
    console.log(blogs)

    useEffect(() => {
        fetch(`http://localhost:3000/posts?page=${page}&perPage=${limit}`)
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching blogs:', error));
    }, [page]);

    const handlePageClick = (pageIndex) => {
        setPage(pageIndex);
        setActivePage(pageIndex); // Обновляем активную страницу при клике на пагинацию
    };

    return (
        <div className="all__blog">
            <AllBlogHeader search={search} setSearch={setSearch} setFilter={setFilter}/>
           <AllBlogCards search={search} blogs={blogs} allBlogs={allBlogs} filter={filter}/>
            <Pagination blogs={blogs} activePage={activePage} handlePageClick={handlePageClick}/>
        </div>
    );
};

export default AllBlog;
