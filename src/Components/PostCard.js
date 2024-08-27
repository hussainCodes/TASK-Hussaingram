import React from 'react'

const PostCard = ({postImage, postTitle, postDiscription, likes}) => {
  return (
    <div className='post-card'>
      <img src={postImage} alt='post image'/>
      <h2>{postTitle}</h2>
      <p>{postDiscription}</p>
  
      <div className='like-area'>
         <h4>{likes} likes</h4> 
        <button>Like</button>
      </div>
    </div>
  )
}

export default PostCard
