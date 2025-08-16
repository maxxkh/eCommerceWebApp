import DecolationImage from '../../../assets/Deco.png'
const Hero_2 = () => {
  //  document.querySelector('.title_1')?.addEventListener('mouseover',  (event)=>{
  //   if (event.target !== null) {
      
  //     event.target.innerText = Math.floor(Math.random()*20)
  //   }  
  //  })

  return (
    <div className="bg-slate-900 h-[100vh]">
      <header className="flex justify-between items-center  bg-slate-900 ">
       <div   className=" h-16 w-[65%] ml-16 flex justify-between items-center">
         <div>
          <a href="" className=" font-semibold text-3xl text-white"><span className=' text-cyan-500'>Y</span>asin.<span className=' text-cyan-500'>D</span>ev</a>
        </div>
        <ul className="flex text-white cursor-pointer justify-between w-[50%]">
          <li className="menuItems"><div> Home </div></li>
          <li className="menuItems"><div>Work</div></li>
          <li className="menuItems"><div>Skill</div></li>
          <li className="menuItems"><div>About</div></li>
          <li className="menuItems"><div>Contact</div></li>
        </ul>
       </div>
      </header>
      <div className=" relative heroBody h-[80vh] px-[15%] border-b-2 border-cyan-700 bg-gradient-to-r from-slate-900 bg-red-400 to-cyan-950 overflow-hidden">
        <div className="textContainer text-white h-72 flex flex-col justify-center">
          <h2 className="title_1 text-[70px]  ">I'm <span className=' text-cyan-300'>Yasin</span> <span className="bg-cyan-300 inline-block w-24  h-2 mb-3"></span></h2>
          <h2 className="text-[70px] ">Crafting code with  <span className=' text-cyan-300'>creativity</span></h2>
          <h3 className="my-10">
            <span className="heroTags">Frontend Developer </span>
            <span className="heroTags">React Enthusiast</span> 
            <span className="heroTags"> Creative Coder</span>
          </h3>
        </div>

        <div className="BtnContainer">
          <button className="heroButton">Explore My Work</button>
          <button className="heroButton">Say Hello</button>
        </div>
        <img className=' absolute bottom-[-130px] right-0  w-[35%] opacity-10 rounded-3xl overflow-hidden' src={DecolationImage} alt="image"  />
        <span className=' opacity-10 inline-block  rounded-3xl  w-12 h-12 rotate-45 border-4 absolute top-28 right-80 border-cyan-300 bg-cyan-300'></span>
        <span className=' opacity-10 inline-block   w-12 h-12 rotate-45 border-4 absolute top-44 right-52 border-cyan-300'></span>
        <span className=' opacity-5 inline-block  rounded-3xl  w-7 h-7  border-4 absolute top-56 right-[310px] border-cyan-300 bg-cyan-300'></span>
        <span className=' opacity-5 inline-block   w-7 h-7 rotate-45 border-4 absolute top-72 right-64 border-cyan-300'></span>
      </div>
    </div>
  )
}

export default Hero_2