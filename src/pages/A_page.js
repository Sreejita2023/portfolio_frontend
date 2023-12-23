import React from "react";
import Header from "../components/Header";
import start from "../assests/start.png";
import block from "../assests/block.png";
function A_page() {
  const heading = "About Me";
  const title =
    "Agency provides a full service range including technical skills, design, business understanding.";
  return (
    <div>
      <Header head={heading} title={title} />
      <div className=" bg-orange-50 flex flex-col items-center pt-12">
        <img
          src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif"
          className=" lg:w-7/12 md:w-9/12 w-10/12  mb-10"
        />
        <div className="flex flex-col items-start gap-y-4 py-3 px-5 ">
          <div className="GabrielPires text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">
            Sreejita Sen
          </div>
          <div className="ProfessionalWebDes max-w-[570px]  text-orange-950 text-[56px] font-extrabold font-['Epilogue'] leading-[64px]">
            Professional Web Designer
          </div>
          <div className="AbilityToPutThems max-w-[570px] text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">
            Ability to put themselves in the merchant's shoes. It is meant to
            partner on the long run, and work as an extension of the merchant's
            team.
            <br />
            <br />A digital agency is a business you hire to outsource your
            digital marketing efforts, instead of handling in-house. They can
            provide your business with a variety of digital solutions to promote
            your product or service online and help you.
          </div>
        </div>
      </div>
      <div className=" bg-red-100 relative pt-20">
        <img src={start} className=" w-[100px] h-[100px] absolute -top-10 left-9 " />
        <div className="flex lg:flex-row lg:justify-around flex-col items-center gap-y-8 ">
          <div className="flex flex-col lg:items-start items-center gap-y-3">
            <div className="GetStarted text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">
              Get Started
            </div>
            <div className="  text-orange-950 text-2xl font-bold font-['Epilogue'] leading-loose">
              I Help Companies
              Move Faster
            </div>
            <button className='bg-red-400  px-6 py-3 rounded-md text-center text-white text-sm font-black font-["Epilogue"] uppercase'>
              Contact Me
            </button>
          </div>
          <div className="PutThemselvesInTh w-[370px] text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">
          Put themselves in the merchant's shoes. It is meant to partner on the
          long run.
        </div>
        <div><img src={block} className="max-w-[350px] max-h-[300px]"/></div>
        </div>
       
      </div>
    </div>
  );
}

export default A_page;
