import profile_pic from '../../assets/ProfilePicture.png'

const Header = () => {
    return (
        <div className=" m-7 flex justify-between content-center">
            <h1 className='text-3xl font-bold ml-5'>Knowledge Cafe</h1>
            <img className='ml-5 w-12' src={profile_pic} alt="" />
        </div>
    );
};

export default Header;