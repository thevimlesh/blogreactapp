import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import spinner from './spinner';

const Blogs = () => {
  // Consume context
  const { posts, loading } = useContext(AppContext);
  console.log{"printing inside blogs component"};
  console.log(posts);

  return (
    <div className='w-11/12 max-w-[450px] py-3 flex-cop gap-y-7'>
      {loading ? (
        <Spinner /> // Assuming you have a Spinner component
      ) : posts.length === 0 ? (
        <div>
          <p>No Posts found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-xs">{post.title}</p>
            <p className='text-[10px]'>
              By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
            </p>
            <p className='text-[11px] mt-[10px]'>Posted on {post.date}</p>
            <p>{post.content}</p>
            <div className=''>
                {post.tags.map ( (tag,index) => {
                    return <span key={index} className='"text-blue-500 underline font-bold text-[8px]'> {'#${tag}'} </span>
                })}
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
