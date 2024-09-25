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
            </div>
        </div>
    );
}