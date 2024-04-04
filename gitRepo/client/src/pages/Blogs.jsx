import React, {useEffect, useState} from 'react';
import '../styles/app.scss'
import Navbar from "../components/navBar/Navbar";
import Logo from "../components/navBar/Logo";
import Recent from "../components/recentPosts/Recent";
import AllBlog from "../components/allBlog/allBlog";
import {useDispatch, useSelector} from "react-redux";
import {setAuthUser} from "../app/userSlice";
const Blogs = () => {
    const dispatch = useDispatch()
    const localUsername = localStorage.getItem('username')
    const localEmail = localStorage.getItem('email')
    const localAdmin = localStorage.getItem('admin')
    useEffect(() => {

        const local = ()=>{
            if(localUsername && localEmail){
                dispatch(setAuthUser({username:localUsername,email:localEmail,password:'',isAuth:true,admin:localAdmin}))
            }
        }

        local()
    }, []);
    const isDark = useSelector(state => state.Dark.value)
    return (
        <div className='container1' data-theme={isDark? "dark":"light"} >
            <div className={'app'}>
                <Navbar/>
                <Logo/>
                <Recent/>
                <AllBlog/>

            </div>
        </div>
    );
};

export default Blogs;