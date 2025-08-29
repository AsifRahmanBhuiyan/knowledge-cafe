import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import React, { useState } from 'react';

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarkButton = bookmark => {
    const newBookmarks = [...bookmarks, bookmark];
    setBookmarks(newBookmarks);
  }


  return (
    <>

      <Header></Header>

      <div className=' md:flex grow container mx-auto gap-6'>
        <Blogs handleBookmarkButton={handleBookmarkButton}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>

    </>
  )
}

export default App
