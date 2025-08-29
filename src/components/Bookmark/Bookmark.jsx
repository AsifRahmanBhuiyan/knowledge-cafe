import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
    const { blog_title } = bookmark;
    return (
        <div className=" bg-black rounded-2xl p-4 text-white shadow-2xl border-black-500 border-3">
            <h2>{blog_title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object,
};

export default Bookmark;
