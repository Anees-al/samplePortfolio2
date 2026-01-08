import {motion} from 'framer-motion'

const Nav = () => {
  return (
    <motion.div className="flex flex-row justify-between py-1 px-2" initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5}}>
      <p className="text-2xl font-bold"><span className="text-4xl font-black text-yellow-400">.</span> Anees <span className="text-sm font-semibold text-gray-600">Designer</span></p>
      <div></div>


      <div className=" hidden sm:flex flex-row gap-4 text-sm mr-10 font-semibold">
        <p className="cursor-pointer hover:text-xl">Resume</p>
        <p className="cursor-pointer hover:text-xl">Project</p>
        <p className="cursor-pointer hover:text-xl">Contact</p>
      </div>
    </motion.div>
  )
}

export default Nav
