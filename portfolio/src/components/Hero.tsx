import profile from  '../assets/anees1.png'

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center min-h-screen gap-10">
          <div>
            <img src={profile} alt="" className='w-[250px] h-[250px] rounded-full shadow-lg shadow-gray-400' />
          </div>
          <div className='flex flex-col gap-1'>
             <h1 className='text-7xl font-bold text-center'>Hello</h1>
             <p className='text-lg font-semibold text-center'>A Bit About Me</p>
             <p className='font-semibold w-[200px] sm:w-auto text-gray-700'>I am a mern stack developer expertise in typescripct</p>
             <div className='flex flex-row gap-2 justify-center items-center'>
                <p className='text-sm p-5 font-semibold rounded-full bg-yellow-500 shadow-lg cursor-pointer hover:shadow-gray-500'>Resume</p>
                <p className='text-sm p-5 font-semibold  rounded-full bg-red-500 shadow-lg cursor-pointer hover:shadow-gray-500'>Projects</p>
                <p className='text-sm p-5 font-semibold rounded-full bg-blue-300 shadow-lg cursor-pointer hover:shadow-gray-500'>Contact</p>
             </div>
          </div>
    </div>
  )
}

export default Hero
