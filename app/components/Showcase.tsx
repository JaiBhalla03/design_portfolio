import React from 'react'
import ShowcaseCard from './utils/ShowcaseCard'
import show1 from '../../public/images/show1.jpg';
import show2 from '../../public/images/show2.jpg';
import show3 from '../../public/images/show3.jpg';

function Showcase() {
  return (
    <div className='pt-20 px-12'>
        <div className='flex w-full justify-between items-center'>
            <div className='text-[3rem] font-[500]'>FASHION SHOWCASE</div>
            <div className='text-lg'>VIEW ALL</div>
        </div>
        <div className='flex w-full justify-between pt-20'>
            <ShowcaseCard source={show1} heading='STYLE IN FOCUS' para='Elevating Style Through Design.'/>
            <ShowcaseCard source={show2} heading='FASHION EDIT' para='Curated Trends, Timeless Styles.'/>
            <ShowcaseCard source={show3} heading='CHIC IN MOTION' para='Where Style Meets Movement.'/>
        </div>
    </div>
  )
}

export default Showcase