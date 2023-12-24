import React from 'react'
import check from '../../assests/check.png'
import web from '../../assests/assets_skill/web.gif'
function Web() {
  return (
    <div className='flex lg:flex-row lg:justify-around lg:items-center flex-col items-center gap-y-6'>
        <div className='flex flex-col gap-y-7 px-10'>
          <div className=" text-orange-950 text-lg font-normal font-['Epilogue'] leading-loose ">Service range including technical skills, design, business understanding.</div>
          <div className='flex flex-col gap-y-1'>
            <div className='flex flex-row justify-start items-center gap-x-3'>
               <img src={check} className='w-5 h-5'/>
               <div className=" text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">Range including technical skills</div>
            </div>
            <div className='flex flex-row justify-start items-center gap-x-3'>
               <img src={check} className='w-5 h-5'/>
               <div className=" text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">Range including technical skills</div>
            </div>
            <div className='flex flex-row justify-start items-center gap-x-3'>
               <img src={check} className='w-5 h-5'/>
               <div className=" text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">Range including technical skills</div>
            </div>
          </div>
        </div>
        <div>
            <img src={web} className='w-full h-full'/>
        </div>
    </div>
  )
}

export default Web