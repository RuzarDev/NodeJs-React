import React from 'react';

const InputSearch = ({search,setSearch}) => {
    return (
        <div className="input-container">
            <input
                type="text"
                className="custom-input"
                value={search.query}
                onChange={(e) => setSearch({...search, query: e.target.value})}
                placeholder="Search..."
            />
        </div>
    );
};

export default InputSearch;