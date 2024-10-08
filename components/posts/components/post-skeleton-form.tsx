import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const PostSkeletonForm = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <Skeleton className='w-full h-8 rounded-sm'/>
      <Skeleton className='w-full h-40 rounded-sm'/>
    </div>    
  )
}

export default PostSkeletonForm