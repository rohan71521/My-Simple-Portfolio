import { Link } from "react-router-dom";
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Footer from "../Footer/Footer";
function About() {

    return (
        <main className="max-w-7xl mx-auto">
            <section className="flex md:flex-col gap-20 flex-col-reverse lg:flex-row py-20">
                <div id="left1" className=" lg:w-1/2 px-2 md:px-10 lg:px-5 pt-10">

                    <h3 id="h3" className="text-left text-2xl md:text-3xl lg:text-4xl font-medium uppercase pb-5 bg-gradient-to-r from-purple-500 to-black bg-clip-text text-transparent">MORE ABOUT ME</h3>

                    <h1 id="h1" className="text-3xl md:text-4xl lg:text-5xl lg: font-light pb-5 lg:pb-10">My Mission Is To Exceed Expectations</h1>

                    <p id="p" className="text-justify">Hi there! Are you looking to grow your business through digital marketing? Well, you&apos;ve come to the right place! As a freelancer with expertise in digital marketing and Facebook ads, I can help take your business to the next level.</p>
                    <p id="p" className="text-justify pt-5 pb-10">With over many days of experience in the industry, I have the knowledge and skills to create a customized marketing plan that suits your business needs. Whether you&apos;re looking to increase website traffic, generate more leads, or boost sales, I can help.</p>
                    <Link to={"/contact"} className="
             bg-gradient-to-r from-purple-500 to-[#14633c]
             px-6 py-4 rounded hover:to-purple-500">Contact Me</Link>
                </div>
                <div id="right1" className="lg:w-1/2 px-5 md:px-10">
                    <img className=" border-r-[10px] border-b-[10px] rounded-3xl  border-purple-500" src="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/316202608_612315280645792_6483065767109961291_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pLssuq-25MwAX9a2AYy&_nc_ht=scontent.fdac27-1.fna&oh=00_AfBlHoFbTZ7AhClOHS3V8oPx21p9sIZg5UOJ5Tk_W3f-DA&oe=65331306" alt="" />
                    <div id="links" className="flex py-10 justify-center md:justify-start gap-10 text-5xl">
                        <Link className="text-blue-600 hover:text-purple-500"><BsFacebook></BsFacebook></Link>
                        <Link className="text-green-500 hover:text-red-600 md:m-0 mt-20"><AiFillLinkedin></AiFillLinkedin></Link>
                        <Link className="text-purple-500 hover:text-blue-800"><AiFillGithub></AiFillGithub></Link>
                    </div>
                </div>
            </section>

            <section className="py-20 px-5">
                <h3 id="h3" className="text-center text-2xl md:text-3xl lg:text-4xl font-medium uppercase pb-5 text-purple-500">MY SKILLS</h3>

                <h1 id="h1" className="text-center text-3xl md:text-4xl lg:text-5xl lg: font-light pb-5 lg:pb-10">The Leading Source For My Skill</h1>
            
                <section className="flex md:flex-col gap-10 flex-col-reverse lg:flex-row py-20">
       <div id="left1" className=" lg:w-1/2 px-2 md:px-10 lg:px-5">
    <div>
    <h3 className="pb-5 text-2xl md:text-3xl lg:text-4xl font-medium capitalize">Social Media Marketing</h3>
    <div className="w-full bg-slate-50 h-4 overflow-hidden rounded-3xl ">
     <div className="w-11/12 h-full bg-gradient-to-r from-purple-500 to-green-500"></div>
    </div>
   
    <h3 className="pt-10 pb-5 text-2xl md:text-3xl lg:text-4xl font-medium capitalize">Search Engine Optimization</h3>
    <div className="w-full bg-slate-50 h-4 overflow-hidden rounded-3xl ">
     <div className="w-10/12 h-full bg-gradient-to-r from-purple-500 to-green-500"></div>
    </div>
  
    <h3 className="pt-10 pb-5 text-2xl md:text-3xl lg:text-4xl font-medium capitalize">Web Design And Development</h3>
    <div className="w-full bg-slate-50 h-4 overflow-hidden rounded-3xl ">
     <div className="w-11/12 h-full bg-gradient-to-r from-purple-500 to-green-500"></div>
    </div>
    </div>

          <p id="p" className="text-justify pt-10">Here are just a few of the services I offer:</p>
          <p id="p" className="text-justify py-2">Social Media Marketing: I can create and manage effective Social Media ad campaigns that target your ideal audience, increase engagement, and drive conversions.</p>
          <p id="p" className="text-justify py-2">Search Engine Marketing: I can help you establish a strong Search Engine Markeitng presence on platforms like Google & Bing. From creating engaging content to responding to Sales, Website Traffic, promotion etc, and messages, I&apos;ve got you covered.</p>
          <p id="p" className="text-justify py-2">I can help you develop and design website that drive conversions and keep your customers engaged.</p>
          <p id="p" className="text-justify py-2">So, if you&apos;re ready to take your business to the next level, let&apos;s work together! Contact me today to get started.</p>

       </div>
       <div id="right1" className="lg:w-1/2 px-5 md:px-10">
        <img className=" border-r-[10px] border-b-[10px] rounded-3xl  border-purple-500" src="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/316202608_612315280645792_6483065767109961291_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pLssuq-25MwAX9a2AYy&_nc_ht=scontent.fdac27-1.fna&oh=00_AfBlHoFbTZ7AhClOHS3V8oPx21p9sIZg5UOJ5Tk_W3f-DA&oe=65331306" alt=""/>
        <div id="links" className="flex py-10 justify-center md:justify-start gap-10 text-5xl">
                <Link className="text-blue-600 hover:text-purple-500"><BsFacebook></BsFacebook></Link>
                <Link className="text-green-500 hover:text-red-600 md:m-0 mt-20"><AiFillLinkedin></AiFillLinkedin></Link>
                <Link className="text-purple-500 hover:text-blue-800"><AiFillGithub></AiFillGithub></Link>
            </div>
       </div>
    </section>
            </section>
            <Footer></Footer>
        </main>
    )
}

export default About;