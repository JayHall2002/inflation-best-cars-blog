{/* When Performance Truck Segment is Selected it will take you here */}

{/* Required Imports */}
import Navbar from "../components/Navbar";
import Image from "next/image";



export default function Perftrucks () {
    return (
        <div className="relative">
            <Navbar />
            {/* Video Playing at the Top of Page */}
            <a href="https://www.youtube.com/shorts/C2uEAyNF_6s" target="_blank" rel="noopener noreferrer">
                <video className="w-full rounded-lg blur-custom-sm" style={{height: '500px', objectFit: 'cover', objectPosition: 'center'}} autoPlay loop muted>
                    <source src="/videos/perftruckintro.mp4" type="video/mp4" />
                </video>
            </a>
            {/* Content Over Video */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-4xl font-bold font-mono p-2 rounded">
                <h1>Performance Trucks</h1>
            </div>
        </div>
    );
}