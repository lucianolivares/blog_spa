import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import Header from '../components/Header'
import axiosInstance from '../axios'


export default function News() {
  const [posts, setPosts] = useState([]);

	useEffect(() => {
    axiosInstance.get().then((res) => {
      setPosts(res.data);
      console.log(res.data)
    });
  }, [setPosts])


  return (
    <div>
      <Header/>
      {posts.map((post) => (
        <PostCard key={post.id} post={post}/>
      )
    )}
    </div>
  )
}
