import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import React, { useState } from 'react';
import Readtime from './components/Readtime/Readtime';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readtime, setReadtime] = useState(0);

  const handleBookmarkButton = bookmark => {
    const newBookmarks = [...bookmarks, bookmark];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (time) => {
    console.log("mark as read");

    const newReadtime = readtime + parseInt(time);
    setReadtime(newReadtime);
  }


  return (
    <>

      <div className=' bg-black'>
        <Header></Header>

        <div className=' md:flex grow container mx-auto gap-6'>
          <Blogs handleBookmarkButton={handleBookmarkButton} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <div>
            <Readtime readtime={readtime}></Readtime>
            <Bookmarks bookmarks={bookmarks}></Bookmarks>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
