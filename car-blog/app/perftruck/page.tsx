{/* When Performance Truck Segment is Selected it will take you here */}

{/* Required Imports */}
import Navbar from "../components/Navbar";
import Image from "next/image";
import fordcoy from '../images/coyoteford.jpeg';

export default function Perftrucks() {
    return (
        <div>
            <Navbar />
            {/* Video Playing at the Top of Page */}
            <div className="relative">
                <a href="https://www.youtube.com/shorts/C2uEAyNF_6s" target="_blank" rel="noopener noreferrer">
                    <video
                        className="w-full rounded-lg blur-custom-sm"
                        style={{ height: '500px', objectFit: 'cover', objectPosition: 'center' }}
                        autoPlay
                        loop
                        muted
                    >
                        <source src="/videos/perftruckintro.mp4" type="video/mp4" />
                    </video>
                </a>
                {/* Content Over Video */}
                <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-4xl font-bold font-mono p-2">
                    <h1>Performance Trucks</h1>
                </div>
            </div>
            {/* Introducing a Top 10 Truck List */}
            <div className="text-center font-bold font-mono text-4xl mt-7 text-blue-500 hover:scale-110 hover:text-gray-400"> 
                <h2>Top Performance Trucks</h2>
            </div>
            <h3 className="text-center font-mono">This will be a list of the Top Performance trucks as of September 2024 at each price point</h3>
            {/* Trucks Under $40k */}
            <div>
                <h2 className="text-2xl mt-9 font-mono tracking-tight text-blue-400">Trucks under $40k</h2>
            </div>
            <Image src={fordcoy} alt="Ford F150" />
        </div>
    );
}
