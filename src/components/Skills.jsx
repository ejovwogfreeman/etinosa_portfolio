import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Photoshop from '../assets/adobe-photoshop.png';
import CorelDraw from '../assets/CorelDraw.png'
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import C_Sharp from '../assets/C-Sharp.png';
import Vmix from '../assets/vMix4.png';
import DotNet from '../assets/Dotnet.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
                  
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="JAVASCRIPT icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="REACT icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="GITHUB icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-40 mx-auto' src={DotNet} alt=".Net icon" />
                  <p className='my-4'>.Net</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={C_Sharp} alt=".C_Sharp icon" />
                  <p className='my-4'>C_Sharp</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-40 mx-auto' src={Vmix} alt="VMIX icon" />
                  <p className='my-4'>VMIX</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="TAILWIND icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-40 mx-auto' src={Photoshop} alt="PHOTOSHOP icon" />
                  <p className='my-4'>PHOTOSHOP</p>
                  
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CorelDraw} alt="CORELDRAW icon" />
                  <p className='my-4'>CORELDRAW</p>
                  <div className='relative w-full h-4 bg-gray-300 rounded-lg'>
    <div className='absolute top-0  border left-0 h-full bg-blue-900 rounded-lg' style={{ width: 'calc(50% - 2px)' }}></div>
  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
