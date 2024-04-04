import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BlogIdPage.scss'
import Navbar from "../components/navBar/Navbar";
import {useDispatch, useSelector} from "react-redux";
import CommentSection from "../components/CommentSection";
import {setAuthUser} from "../app/userSlice";

const BlogIdPage = () => {

    const dispatch = useDispatch()
    const localUsername = localStorage.getItem('username')
    const localEmail = localStorage.getItem('email')
    useEffect(() => {

        const local = ()=>{
            if(localUsername && localEmail){
                dispatch(setAuthUser({username:localUsername,email:localEmail,password:'',isAuth:true}))
            }
        }

        local()
    }, []);


    const params = useParams();
    const [post, setPost] = useState([]);
    let i = 0
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/posts/${params.blogId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, [params.blogId,post]);



    const isDark = useSelector(state => state.Dark.value)


    const [text, setText] = useState('')
    const authUser = useSelector(state => state.AuthUser)
    const author = authUser.username
    const handlerAddComment = ()=>{
        fetch(`http://localhost:3000/posts/${params.blogId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ author, text })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add comment');
                }
                return response.json();
            })
            .then(newComment => {
                console.log('New comment added:', newComment);
            })
            .catch(error => {
                console.error('Error adding comment:', error.message);
            });
    }

    return (
        <div className='container1' data-theme={isDark ? "dark":"light"}>
            <div className={'app'}>
                <Navbar/>
                <div className="blog-post-container">
                    <div className="blog-post">
                        {post ? (
                            <>
                                <img style={{width:"100%",height:"auto"}} src={post.img} alt=""/>
                                <h1 className="blog-post-title">{post.title}</h1>
                                <p className="blog-post-content">{post.subtitle}
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci asperiores aspernatur aut culpa dolor enim error ipsum maxime natus nisi, perspiciatis porro quidem recusandae repellat similique sit veniam voluptates.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci asperiores aspernatur aut culpa dolor enim error ipsum maxime natus nisi, perspiciatis porro quidem recusandae repellat similique sit veniam voluptates.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci asperiores aspernatur aut culpa dolor enim error ipsum maxime natus nisi, perspiciatis porro quidem recusandae repellat similique sit veniam voluptates.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci asperiores aspernatur aut culpa dolor enim error ipsum maxime natus nisi, perspiciatis porro quidem recusandae repellat similique sit veniam voluptates.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci asperiores aspernatur aut culpa dolor enim error ipsum maxime natus nisi, perspiciatis porro quidem recusandae repellat similique sit veniam voluptates.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci asperiores aspernatur aut culpa dolor enim error ipsum maxime natus nisi, perspiciatis porro quidem recusandae repellat similique sit veniam voluptates.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci asperiores aspernatur aut culpa dolor enim error ipsum maxime natus nisi, perspiciatis porro quidem recusandae repellat similique sit veniam voluptates.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci asperiores aspernatur aut culpa dolor enim error ipsum maxime natus nisi, perspiciatis porro quidem recusandae repellat similique sit veniam voluptates.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci asperiores aspernatur aut culpa dolor enim error ipsum maxime natus nisi, perspiciatis porro quidem recusandae repellat similique sit veniam voluptates.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci asperiores aspernatur aut culpa dolor enim error ipsum maxime natus nisi, perspiciatis porro quidem recusandae repellat similique sit veniam voluptates.
                                </p>
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                        {
                            authUser.isAuth ?
                                <CommentSection text={text} handlerAddComment={handlerAddComment} setText={setText} comments={post.comments}/>
                                :
                                <div></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogIdPage;
