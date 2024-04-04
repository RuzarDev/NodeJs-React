import React from 'react';
import '../../styles/recentPosts/recent.scss'
import RecentPosts from "./RecentPosts";
import RecentHeader from "./RecentHeader";
const Recent = () => {
    return (
        <div className="recent">
            <RecentHeader/>
            <RecentPosts/>
        </div>
    );
};

export default Recent;