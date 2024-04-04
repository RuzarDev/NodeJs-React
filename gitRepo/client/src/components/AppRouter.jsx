import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import BlogIdPage from "../pages/BlogIdPage";
import Auth from "../pages/Auth";
import Admin from "../pages/Admin";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/blog" element={<Blogs/>}/>
                <Route path="/" element={<Navigate to='/blog'/>}/>
                <Route path="/blog/:blogId" element={<BlogIdPage />}/>
                <Route path={"/auth"} element={<Auth/>}/>
                <Route path={"/reg"} element={<Auth/>}/>
                <Route path={"/admin"} element={<Admin/>}/>
                <Route path="*" element={<Navigate to={"/"}/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;