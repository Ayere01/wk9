import Image from 'next/image'
import React from 'react'

export default function Remote() {
  return (
    <div>
        <Image src='https://images.unsplash.com/photo-1599056377758-4808a7e70337?q=80&w=2932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="camera" width={400} height={300}/>    
        <Image src='https://images.freeimages.com/images/large-previews/20c/my-puppy-maggie-1362787.jpg?fmt=webp&h=350' alt='pup' width={200} height={300}/>
    </div>
)
}
