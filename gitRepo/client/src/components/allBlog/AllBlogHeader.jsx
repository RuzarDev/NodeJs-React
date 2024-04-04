import React from 'react';
import Categories from "./Categories";
import InputSearch from "../InputSearch";

const AllBlogHeader = ({setFilter,search,setSearch}) => {
    return (
        <div className="all__blog__header">
            <p className="all__blog__title">All blog posts</p>
            <Categories setFilter={setFilter}/>
            <InputSearch search={search} setSearch={setSearch}/>
        </div>
    );
};

export default AllBlogHeader;