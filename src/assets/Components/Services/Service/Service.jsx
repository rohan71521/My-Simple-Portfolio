

function Service(){

    return(
        <div>
                <main id="services" className="py-5 lg:py-32 max-w-7xl mx-auto px-2 lg:px-5">
      <div className="overflow-hidden">
        <h3 id="service" className="text-center text-2xl md:text-3xl lg:text-4xl font-medium uppercase pb-5 text-purple-500 ">my services</h3>
      </div>
     <div className="overflow-hidden">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl lg: font-light pb-5"> I &apos; m Here To Make Money From Your Business</h1>
     </div>
       <div id="cards" className="flex justify-center items-center py-7 lg:py-10">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-10">
      <div id="card1" className="px-3 py-8 rounded-xl bg-gradient-to-b from-gray-300 to-gray-950 relative overflow-hidden">
        <img className="w-28 h-28 rounded-2xl" src="https://media.istockphoto.com/id/1444833926/photo/3d-hashtag-speech-bubble-and-like-button-in-social-media-follow-trending-tag-social-network.webp?s=1024x1024&w=is&k=20&c=knIE2xbzUD_KUgDlUH0jpWEC4XcjVirGzoZwVq0c_YA=" alt="About my experience"/>
        <h3 className="py-5 text-2xl font-light">Social Media Marketing</h3>
        <p className="text-justify">I can create and manage effective Social Media ad campaigns that target your ideal audience, increase engagement, and drive conversions.</p>
        <div className="w-full h-full bg-gradient-to-b from-purple-500 to-black absolute top-0 left-0 opacity-0 hover:opacity-50"></div>
      </div>
      <div id="card2"  className="px-3 py-8 rounded-xl bg-gradient-to-b from-gray-300 to-gray-950 relative overflow-hidden">
        <img className="w-28 h-28 rounded-2xl" src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvY2lhbCUyMG1lZGlhJTIwbWFya2V0aW5nJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="About my experience"/>
        <h3 className="py-5 text-2xl font-light">Search Engine Marketing</h3>
        <p className="text-justify">I can help you establish Search Engine Marketing on platforms like Google & Bing. From responding to Sales, Website Traffic, promotion</p>
        <div className="w-full h-full bg-gradient-to-b from-purple-500 to-black absolute top-0 left-0 opacity-0 hover:opacity-50"></div>
      </div>
      <div id="card3" className="px-3 py-8 rounded-xl bg-gradient-to-b from-gray-300 to-gray-950 relative overflow-hidden">
        <img className="w-28 h-28 rounded-2xl" src="https://media.istockphoto.com/id/1358013032/photo/web-development-concept.webp?b=1&s=170667a&w=0&k=20&c=aAR7goX4e7jDiUfx1SNA7lD04WldUv6okpifv80xGcw=" alt="About my experience"/>
        <h3 className="py-5 text-2xl font-light">Web Design And Development</h3>
        <p className="text-justify">I can help you develop and design website that drive conversions and keep your customers engaged.</p>
        <div className="w-full h-full bg-gradient-to-b from-purple-500 to-black absolute top-0 left-0 opacity-0 hover:opacity-50"></div>
      </div>
    </div>
       </div>
    </main>

   
        </div>
    )
}

export default Service;