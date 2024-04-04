import '../styles/allBlog/CommentSection.scss';


const CommentSection = ({ comments,setText,text,handlerAddComment }) => {




    return (
        <div className="comment-section">
            <h2 className="comment-heading">Comments</h2>
            <div className="comment-form">
                <textarea
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    className="comment-input"
                    placeholder="Add your comment..."
                ></textarea>
                <button onClick={()=>handlerAddComment()} className="comment-submit">
                    Submit
                </button>
            </div>
            <ul className="comment-list">
                {Array.isArray(comments) && comments.map((comment, index) => (
                    <li key={index} className="comment">
                        <div className="comment-author">{comment.author}</div>
                        <div className="comment-content">{comment.text}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentSection;
