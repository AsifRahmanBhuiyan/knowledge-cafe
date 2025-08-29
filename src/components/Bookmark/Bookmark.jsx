import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
    const { blog_title } = bookmark;
    return (
        <div className=" bg-black rounded-2xl p-5 text-white">
            <h2>{blog_title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object,
};

export default Bookmark;
