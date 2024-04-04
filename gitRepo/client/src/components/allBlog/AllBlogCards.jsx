import React from 'react';
import AllBlogCard from "./AllBlogCard";
import {searchedAndFilteredBlog} from "../../functions/filterFunctions";

const AllBlogCards = ({search,blogs,filter,allBlogs}) => {
    return (
        <div className="all__blog__cards">
            {search.query === '' && filter === "All" ?
                blogs.posts.map(item => <AllBlogCard key={item.id} blog={item}/>) :
                searchedAndFilteredBlog(allBlogs, search, filter).map(item => <AllBlogCard key={item.id} blog={item}/>)
            }
        </div>
    );
};

export default AllBlogCards;