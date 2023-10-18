import { Link } from "react-router-dom";
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin ,AiFillGithub} from 'react-icons/ai';

function MoreAbout(){

    return (
        <div>
         <main className="flex md:flex-row flex-col-reverse lg:flex-row py-32 lg:py-40 max-w-7xl mx-auto">
       <div id="left1" className=" md:w-1/2 px-2 lg:px-5 pt-10">

        <h3 id="h3" className="text-left text-2xl md:text-3xl lg:text-4xl font-medium uppercase pb-5 bg-gradient-to-r from-purple-500 to-black bg-clip-text text-transparent">MORE ABOUT ME</h3>


          <h1 id="h1" className="text-3xl md:text-4xl lg:text-5xl lg: font-light pb-5">My Mission Is To Exceed Expectations</h1>

          <p id="p" className="text-justify pb-10">Hi there! Are you looking to grow your business through digital marketing? Well, you&apos;ve come to the right place! As a freelancer with expertise in digital marketing and Facebook ads, I can help take your business to the next level.</p>

         <Link to={"/about"} className=" 
             bg-gradient-to-r from-purple-500 to-[#14633c]
             px-6 py-2 rounded hover:to-purple-500">About Me</Link>
       </div>
       <div id="right1" className="md:w-1/2  relative">
       <img className="lg:h-[350px] relative left-1/2 -translate-x-1/2 h-80 border-[10px] border-purple-600  rounded-t-full" src="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/316202608_612315280645792_6483065767109961291_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pLssuq-25MwAX9a2AYy&_nc_ht=scontent.fdac27-1.fna&oh=00_AfBlHoFbTZ7AhClOHS3V8oPx21p9sIZg5UOJ5Tk_W3f-DA&oe=65331306" alt=""/>
        <div id="" className="text-3xl absolute bottom-0 left-1/2 -translate-x-1/2
         bg-black flex items-center justify-center gap-5 p-5 rounded-3xl border-2 border-white">
                         <Link className="text-blue-600 hover:text-purple-500"><BsFacebook></BsFacebook></Link>
                <Link className="text-green-500 hover:text-red-600"><AiFillLinkedin></AiFillLinkedin></Link>
                <Link className="text-purple-500 hover:text-blue-800"><AiFillGithub></AiFillGithub></Link>
      </div>
       </div>
    </main>
        </div>
    )
}

export default MoreAbout;