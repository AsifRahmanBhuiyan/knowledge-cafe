import React from 'react';
import PropTypes from 'prop-types';

const Readtime = ({readtime}) => {
    return (
        <div>
            <h3>Spent time on read: {readtime}</h3>
        </div>
    );
};

Readtime.propTypes = {
    readtime: PropTypes.number
};

export default Readtime;