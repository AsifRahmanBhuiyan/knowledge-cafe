import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h3>Blogs: {blogs.length}</h3>
            <div className="flex flex-col gap-5">
                {
                    blogs.map(blog => <Blog blog={blog} key={blog.posting_date}></Blog>)

                }
            </div>
        </div>
    );
};

export default Blogs;