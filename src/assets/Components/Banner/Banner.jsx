import { Link } from "react-router-dom";
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin ,AiFillGithub} from 'react-icons/ai';
function Banner(){

    return(

        <main className="flex flex-col-reverse md:flex-row lg:flex-row py-10 max-w-7xl mx-auto lg:py-20">
        <div id="left" className="lg:w-1/2 md:w-1/2 md:pl-5 py-10 px-2 lg:px-5 " >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-purple-500 to-black bg-clip-text text-transparent">6 Months Of Experience</h2>
            <h1 className="text-3xl md:text-4xl lg:text-6xl lg: font-bold pt-5">The Best Choice For </h1>
            <h1 className="text-3xl md:text-4xl lg:text-6xl lg: font-bold"> Your Successful</h1>
            <h1 className="text-3xl md:text-4xl lg:text-6xl lg: font-bold pb-5">  Business!</h1>
             <button className="
             bg-gradient-to-r from-purple-500 to-[#14633c]
             px-6 py-2 rounded">View More</button>
            <div id="links" className="text-3xl flex gap-5 py-10 justify-end md:justify-start">
                <Link className="text-blue-600 hover:text-purple-500"><BsFacebook></BsFacebook></Link>
                <Link className="text-green-500 hover:text-red-600"><AiFillLinkedin></AiFillLinkedin></Link>
                <Link className="text-purple-500 hover:text-blue-800"><AiFillGithub></AiFillGithub></Link>
            </div>
        </div>
        <div id="right" className="lg:w-1/2 md:w-1/2 flex justify-end items-center overflow-hidden
        px-5">
            <img  className="w-11/12 lg:h-[500px]  h-96 object-cover rounded-xl"
            src="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/316202608_612315280645792_6483065767109961291_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pLssuq-25MwAX9a2AYy&_nc_ht=scontent.fdac27-1.fna&oh=00_AfBlHoFbTZ7AhClOHS3V8oPx21p9sIZg5UOJ5Tk_W3f-DA&oe=65331306" alt=""/>     
        </div>
   </main>
    )
}

export default Banner;