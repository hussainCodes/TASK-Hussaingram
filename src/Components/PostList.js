import React from 'react'
import PostCard from './PostCard'
import posts from '../assets/data'
import '../assets/style.css'

const PostList = () => {
    const list = posts.map(post => <PostCard postImage={post.image} postTitle={post.title} postDiscription={post.description} likes={post.likes}/>);
  return (
    <div className='post-list'>
      {list}
    </div>
  )
}

export default PostList
