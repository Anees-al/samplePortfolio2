import profile from  '../assets/anees1.png'
import {motion} from 'framer-motion'


const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center min-h-screen gap-10">
          <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.7}}>
            <img src={profile} alt="" className='w-[250px] h-[250px] rounded-full shadow-lg shadow-gray-400' />
          </motion.div>
          <motion.div className='flex flex-col gap-1' initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.7}}>
             <motion.h1 className='text-7xl font-bold text-center' initial={{scale:0,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{duration:0.7}}>Hello</motion.h1>
             <motion.p className='text-lg font-semibold text-center' initial={{scale:0,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{duration:0.7}}>A Bit About Me</motion.p>
             <motion.p className='font-semibold w-[200px] sm:w-auto text-gray-700' initial={{scale:0,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{duration:0.7}}>I am a mern stack developer expertise in typescripct</motion.p>
             <motion.div className='flex flex-row gap-2 justify-center items-center' initial={{scale:0,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{duration:0.7}}>
                <p className='text-sm p-5 font-semibold rounded-full bg-yellow-500 shadow-lg cursor-pointer hover:shadow-gray-500'>Resume</p>
                <p className='text-sm p-5 font-semibold  rounded-full bg-red-500 shadow-lg cursor-pointer hover:shadow-gray-500'>Projects</p>
                <p className='text-sm p-5 font-semibold rounded-full bg-blue-300 shadow-lg cursor-pointer hover:shadow-gray-500'>Contact</p>
             </motion.div>
          </motion.div>
    </div>
  )
}

export default Hero
