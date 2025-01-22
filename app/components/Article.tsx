import React from 'react'
import ArticleCard from './utils/ArticleCard'
import show1 from '../../public/images/show1.jpg';
import show2 from '../../public/images/show2.jpg';
import show3 from '../../public/images/show3.jpg';

function Article() {
  return (
    <div className='pt-20 px-12'>    
        <div className='text-[3rem] font-[500]'>LATEST ARTICLE</div>
        <div className='flex w-full justify-between pt-10'>
            <ArticleCard source={show3} heading='WHAT YOUR CLOTHING' para='January 20, 2024'/>
            <ArticleCard source={show2} heading='CREATING UNIQUE PIECES' para='February 13, 2024'/>
            <ArticleCard source={show1} heading='UNLEASH THE POTENTIAL' para='July 15, 2024'/>
        </div>
    </div>
  )
}

export default Article