const Blog = ({blog}) => {
    
    const {cover_img, author_name, authors_img, blog_duration, blog_title,posting_date,hashtags} = blog;
    return (
        <div className="flex flex-col gap-4 border-black-500 border-5 p-5 rounded-3xl">
            <img src={cover_img} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex gap-1">
                    <img className=" w-12 rounded-full" src={authors_img} alt="" />
                    <div>
                        <h3 className="text-l font-bold">{author_name}</h3>
                        <p className=" font-light">Posted on: {posting_date}</p>
                    </div>
                </div>
                <p className=" text-sm">{blog_duration}</p>
            </div>
            <h1 className=" text-4xl font-medium">{blog_title}</h1>
            <div className="flex gap-1.5">
                {
                    hashtags.map(hashtag => <p className=" font-extralight text-sm">{hashtag}</p>)
                }
            </div>
            <button className=" font-bold bg-cyan-600 border-2 text-white">Mark as read</button>
        </div>
    );
};

export default Blog;