import React from "react";
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className=" bg-gray-300 p-5 rounded-2xl">
            <h3 className="text-l font-bold">Bookmarks: {bookmarks.length}</h3>
            <div className="flex flex-col gap-5 bg-gray-50 rounded-2xl p-5">
                {bookmarks.map((bookmark, idx) => (
                    <Bookmark bookmark={bookmark} key={idx}></Bookmark>
                ))}
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
};

export default Bookmarks;
