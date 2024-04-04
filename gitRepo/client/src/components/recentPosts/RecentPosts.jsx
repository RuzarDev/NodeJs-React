import React from 'react';
import PostCardMiddle from "../Cards/PostCardMiddle";
import SmallCard from "../Cards/SmallCard";
import BigCard from "../Cards/BigCard";

const RecentPosts = () => {
    return (
        <div className='recent__posts'>
            <div className="recent__blog">
                <PostCardMiddle/>
                <div className="item2">
                    <SmallCard/>

                    <div className="item2-1">
                        <SmallCard/>

                    </div>
                </div>
                <div className="item3">
                    <BigCard/>
                </div>
            </div>
        </div>
    );
};

export default RecentPosts;