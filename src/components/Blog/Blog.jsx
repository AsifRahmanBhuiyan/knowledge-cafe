import React from "react";
import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmarkButton, handleMarkAsRead }) => {
    const {
        cover_img,
        author_name,
        authors_img,
        blog_duration,
        blog_title,
        posting_date,
        hashtags,
    } = blog;
    return (
        <div className="flex flex-col gap-4 border-black-500 border-3 p-5 rounded-3xl bg-gray-300 shadow-2xl">
            <img className=" rounded-xl" src={cover_img} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex gap-1">
                    <img className=" w-12 rounded-full" src={authors_img} alt="" />
                    <div>
                        <h3 className="text-l font-bold">{author_name}</h3>
                        <p className=" font-light">Posted on: {posting_date}</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <p className=" text-sm">{blog_duration} min read</p>
                    <button
                        onClick={() => handleBookmarkButton(blog)}
                        className=" text-2xl"
                    >
                        <FaRegBookmark></FaRegBookmark>
                    </button>
                </div>
            </div>
            <h1 className=" text-4xl font-medium">{blog_title}</h1>
            <div className="flex gap-1.5">
                {hashtags.map((hashtag) => (
                    <p key={hashtag} className=" font-extralight text-sm">
                        {hashtag}
                    </p>
                ))}
            </div>
            <button onClick={() => handleMarkAsRead(blog_duration)}  className=" rounded-lg font-bold bg-emerald-600 border-2 text-white text-xl">
                Mark as read
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarkButton: PropTypes.func,
    handleMarkAsRead: PropTypes.func
};

export default Blog;
