import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import React from 'react';
import PropTypes from 'prop-types';

const Blogs = ({handleBookmarkButton, handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <div className="flex flex-col gap-5">
                {
                    blogs.map(blog => <Blog handleBookmarkButton={handleBookmarkButton} handleMarkAsRead={handleMarkAsRead} blog={blog} key={blog.id}></Blog>)

                }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarkButton: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}


export default Blogs;