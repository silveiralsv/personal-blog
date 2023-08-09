import React from 'react'

interface Post {
    id: number;
    attributes: {
      content: string;
      title: string;
    }
  }

interface PostListProps {
    data: Post[]
}

export default function PostsList({data: posts} : PostListProps) {
  return (
    <div className='flex gap-5 p-5'>
        {posts?.map(post => (
            <div key={post.id} className='flex flex-col items-center border-gray-700 border-solid border-[1px] bg-gray-900 rounded-sm p-5 max-w-md cursor-pointer hover:scale-105 transition-all'>
                <span>{post.attributes.title}</span>
                <span>{post.attributes.content}</span>
            </div>
        ))}
    </div>
  )
}
