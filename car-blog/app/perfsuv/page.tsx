{/* When Performance Suv is selected it will take you here */}

{/* Necessary Imports */}
import Navbar from "../components/Navbar";

export default function Perfsuvs () {
    return (
        <div>
            <div className="relative">
                < Navbar/> {/* Navbar at the top of the screen */}
                {/* Import the perfsuv Intro video underneath of the Navbar */}
                
                <a href="https://www.tiktok.com/@zzvne.edits/video/7062267449236000006?q=x6m%20rocars&t=1727279751790" target="_blank" rel="noopener noreferrer">
                    <video autoPlay muted loop
                    className="w-full rounded-lg blur-custom-sm shadow-lg"
                    style={{height:'500px', objectFit:'cover', objectPosition:'center'}}>
                        <source src="/videos/perfsuvintro.mp4" type="video/mp4" />
                    </video>
                    {/* Performance SUV Title */}
                    <div className="absolute inset-0 flex items-center 
                    justify-center text-white text-4xl font-mono font-bold">
                        <h1>Performance SUVS</h1>
                    </div>
                </a>
                {/* Add Link to Video Button */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                    <a href="https://www.tiktok.com/@zzvne.edits/video/7062267449236000006?q=x6m%20rocars&t=1727279751790" target="_blank">
                        <button className="bg-blue-400 text-white mt-7 font-bold rounded-lg py-3 px-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-600 ">
                            Link to Video
                        </button>
                    </a>
                </div>
            </div>{/* End top of Page Section */}
            
            <div>{/* Begin SUV Ranking section */}
                <div className="text-center translate-y-14 text-4xl font-bold
                font-mono tracking-tighter text-blue-400 hover:scale-110 hover:text-gray-400">
                    <h1>Best Performance SUVS</h1>
                </div>
                {/* Blue Pinging Button */}
                <div className="flex justify-center mt-20 translate-y-6">
                    <span className="relative flex h-18 w-18">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex items-center justify-center rounded-full h-16 w-16 bg-blue-400 text-white text-3xl">
                    &#8595;
                    </span>
                    </span>
                </div>
            </div>
            <div className="relative"> {/* Best SUVS Under 50K */}
                <div className="translate-y-14 mt-12 text-3xl font-mono tracking-tight text-blue-400 text-center">
                    <h1>
                        SUVS Under $50k
                    </h1>
                </div>
                <div className="flex justify-between space-x-8 p-20 m-14 items-start">
                    {/* BMW X3 M40i */}
                    <a href="" target="_blank">
                        <div className="relative h-full">
                            <video className="w-full h-full rounded-lg object-cover group-hover:blur-lg"
                            autoPlay
                            loop
                            muted >
                                <source src="/videos/x3m40.mp4" type="/video/mp4" />
                            </video>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}