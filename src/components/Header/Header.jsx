import React from 'react'
import profile_pic from '../../assets/ProfilePicture.png'

const Header = () => {
    return (
        <div className="flex justify-between content-center container mx-auto border-b-2 pb-5 mb-5">
            <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
            <img className='w-12' src={profile_pic} alt="" />
        </div>
    );
};

export default Header;

