import React from 'react';
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks}) => {
    return (
        <div>
            <h3>Bookmarks: {bookmarks.length}</h3>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;

