import React from 'react'
import leetcode from '../assests/leetcode.png'
import linkedin from '../assests/linkedin.png'
import github from '../assests/github.png'

function Footer() {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <div className="bg-slate-800 left-0 right-0 relative z-10 px-4 pb-4 pt-10">
        <div className='flex flex-row justify-around pb-8'>
         <div className="Personal  text-white text-2xl font-bold font-['Epilogue'] leading-loose">Webfolio</div>
         <div className='grid grid-cols-1 gap-y-2'>
         <div className="Menu cursor-pointer  text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">Menu</div>
         <div className="cursor-pointer  text-white text-base font-normal font-['Epilogue'] leading-loose">About</div>
         <div className="cursor-pointer  text-white text-base font-normal font-['Epilogue'] leading-loose">Skills</div>
         <div className="cursor-pointer  text-white text-base font-normal font-['Epilogue'] leading-loose">Projects</div>
         <div className="cursor-pointer  text-white text-base font-normal font-['Epilogue'] leading-loose">Contact Us</div>
         </div>
         <div className='grid grid-cols-1 gap-y-2'>
         <div className="cursor-pointer  text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">Services</div>
         <div className="cursor-pointer  text-white text-base font-normal font-['Epilogue'] leading-loose">Javascript</div>
         <div className="cursor-pointer  text-white text-base font-normal font-['Epilogue'] leading-loose">Skills</div>
         <div className="cursor-pointer  text-white text-base font-normal font-['Epilogue'] leading-loose">Projects</div>
         <div className="cursor-pointer  text-white text-base font-normal font-['Epilogue'] leading-loose">Contact Us</div>
         </div>
         <div className='grid grid-cols-3 gap-x-3'>
            <div className='cursor-pointer w-9 h-9'onClick={() => openInNewTab('https://leetcode.com/sreejita12/')}><img src={leetcode}/></div>
            <div className='cursor-pointer w-9 h-9' onClick={() => openInNewTab('https://www.linkedin.com/in/sreejita-sen/')}><img src={linkedin}/></div>
            <div className='cursor-pointer w-9 h-9' onClick={() => openInNewTab('https://github.com/Sreejita2023')}><img src={github}/></div>
         </div>
        </div>
        <div className="Rectangle mx-auto w-10/12 h-px bg-gray-700" />
        <div className='flex flex-row justify-around pt-12 pb-16 '>
          <div className=" text-white text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">Copyright © 2022 Laaqiq. All Rights Reserved.</div>
          <div className='grid grid-cols-2 gap-x-20'>
          <div className="TermsOfUse text-right text-white text-base font-normal font-['Epilogue'] leading-loose">Terms of Use</div>
          <div className="PrivacyPolicy text-right text-white text-base font-normal font-['Epilogue'] leading-loose">Privacy Policy</div>
          </div>
        </div>
    </div>
  )
}

export default Footer