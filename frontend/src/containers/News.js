import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import Header from '../components/Header'


export default function News() {
  const [posts, setPosts] = useState([]);

	useEffect(() => {
		const apiUrl = `http://192.168.20.30:8000/api/`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setPosts(posts);
			});
	}, [setPosts]);


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
