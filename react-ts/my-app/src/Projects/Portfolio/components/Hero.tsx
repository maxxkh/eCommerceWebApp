const Hero = () => {



  
  return (
    <div className='w-[100%] h-[100vh] bg-gray-100 flex  justify-center items-center'>
        
        <div className='w-[90%] h-[90vh] bg-white rounded-3xl shadow-lg overflow-hidden relative'>

            <header className='
                flex 
                justify-between 
                items-center
                px-14 
                py-4 w-[100%] 
                border-grey-100
                border-b-2
            '>
                <div>
                    <a href="#" className='text-2xl font-semibold' >Yasin.Dev</a>
                </div>
                <ul className='flex justify-between w-[50%]'>
                    <li className='menuItems activeItem'>Home</li>
                    <li className='menuItems'>About</li>
                    <li className='menuItems'>Projects</li>
                    <li className='menuItems'>Skills</li>
                    <li className='menuItems'>Contact</li>
                </ul>
            </header>
            <div className='heroBody w-[100%] h-[100%]  flex justify-center items-center'>
                <div className='textArea   p-5 flex flex-col items-start justify-between h-[30%] w-[50%]'>
                    <h4 className='text-3xl'>Hello I'm</h4>
                    <h1 className='text-6xl font-semibold'>Yasin Malak</h1>
                    <h4 className='text-3xl '>I'm a Frontend Developer</h4>
                    <button className='p-4 bg-blue-600 rounded-xl'>View My Work</button>
                </div>
                <div className='imageArea bg-slate-600 w-[25%] h-[50%] rounded-s-full rounded-e-full flex justify-center items-center overflow-hidden'>
                    <img className='bg-blue-800 rounded-lg' src="src\assets\profileImaddge.jpg" alt="profile image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero