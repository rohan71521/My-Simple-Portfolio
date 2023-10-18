import { Link } from "react-router-dom";
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function Footer() {
    

    return(
       <main className="flex flex-col md:flex-row  w-full lg:h-[700px] md:h-[500px] md:items-end">
          <section className="bg-red-500 md:w-1/2 h-full rounded-t-2xl overflow-hidden relative">
             <img className="w-full h-full object-cover"
              src="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/316202608_612315280645792_6483065767109961291_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pLssuq-25MwAX9a2AYy&_nc_ht=scontent.fdac27-1.fna&oh=00_AfBlHoFbTZ7AhClOHS3V8oPx21p9sIZg5UOJ5Tk_W3f-DA&oe=65331306" alt="" />
              <div className="md:bg-purple-600 bg-gray-950 w-full h-full absolute top-0 left-0 opacity-90 md:opacity-80"></div>
          </section>
          <section className="md:w-1/2 md:h-2/3 text-center md:text-left bg-gray-950 rounded-t-2xl  flex flex-col  justify-center items-center">
<div className=" flex flex-col md:flex-row justify-center items-center">
<div id="left" className="lg:px-10 px-2">
            <h3 className="pt-10 pb-5 text-lg m lg:text-xl font-medium capitalize">Important Links</h3>
            <div className="flex gap-2 flex-col">
            <Link className="hover:text-blue-500">About Me</Link>
            <Link className="hover:text-blue-500">Contact Me</Link>
            <Link className="hover:text-blue-500">Portfolio</Link>
            <Link className="hover:text-blue-500">Services</Link>
            </div>
            </div>
            <div id="right" className="lg:px-10 px-2">
            <h3 className="pt-10 pb-5 text-lg m lg:text-xl font-medium capitalize">Say Hello</h3>
            <div className="flex gap-2 flex-col">
              <p>Bogra, Rajshahi, Bangladesh</p>
              <p>rohan71521@gmail.com</p>
              <p>+880 192 227 1521 </p>
            </div>
            </div>
</div>
            <div id="links" className="flex-grow flex py-10 justify-center md:justify-start gap-10 text-5xl">
                <Link className="text-blue-600 hover:text-purple-500"><BsFacebook></BsFacebook></Link>
                <Link className="text-green-500 hover:text-red-600"><AiFillLinkedin></AiFillLinkedin></Link>
                <Link className="text-purple-500 hover:text-blue-800"><AiFillGithub></AiFillGithub></Link>
            </div>

            <footer>
            &copy; 2023 Rohan. All Rights Reserved.
            </footer>
          </section>
       </main>
    )
}

export default Footer;