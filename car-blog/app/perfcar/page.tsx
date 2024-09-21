{/* When Performance car image segment on the Home page is selected it will take you here */}

{/* Required Imports */}
import Navbar from "../components/Navbar";
import Image from "next/image";
import perfsedan from '../images/perfsedan.jpeg';
import perfcoupe from '../images/perfcoupe.jpeg';
import perfsuv from '../images/perfsuv.jpeg';
import perftruck from '../images/perftruck.jpeg';




export default function Performancecar () {
    return (
        <div className="relative">
            <Navbar />
            {/* Video Playing at the Top of Page */}
            <video className="w-full rounded-lg blur-custom-sm" style={{height: '500px', objectFit: 'cover', objectPosition: '50% 25%'}} autoPlay loop muted>
                <source src="/videos/IMG_2193.mp4" type="video/mp4" />
            </video>
            {/* Content Over Video */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-6xl font-bold font-mono p-2 rounded">
                <h1>Performance Cars</h1>
            </div>
            {/* Blue Arrow */}
            <div className="flex justify-center mt-20">
                <span className="relative flex h-18 w-18">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex items-center justify-center rounded-full h-16 w-16 bg-blue-400 text-white text-3xl">
                        &#8595;
                    </span>
                </span>
            </div>
            {/* Car types Within Performance Section */}
            <div className="flex flex-row justify-center mt-9">
                {/* Performance Sedans */}
                <div className="text-center mx-4 relative group">
                    <Image src={perfsedan} alt="Performance Sedan" width={300} height={300} className="
                    mt-9 h-64 scale-75 group-hover:blur-custom-sm
                    transition ease-in-out delay-150 group-hover:scale-90 rounded-lg"/>
                    <div
                    className="absolute inset-0 flex items-center justify-center text-white 
                    font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Click view Performance Sedans 
                    </div>
                    <p className="font-mono text-blue-400 tracking-tight">Sedans</p>
                </div>
                {/* Coupes */}
                <div className="text-center mx-4 relative group">
                    <Image src={perfcoupe} alt="Performance Coupe" width={300} height={300} className="
                    mt-9 h-64 scale-75 group-hover:blur-custom-sm
                    transition ease-in-out delay-150 group-hover:scale-90 rounded-lg"/>
                    <div
                    className="absolute inset-0 flex items-center justify-center text-white 
                    font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Click view Performance Coupes 
                    </div>
                    <p className="font-mono text-blue-400 tracking-tight">Coupes</p>
                </div>
                {/* SUV */}
                <div className="text-center mx-4 relative group">
                    <Image src={perfsuv} alt="Performance Suv" width={300} height={300} className="
                    mt-9 h-64 scale-75 group-hover:blur-custom-sm
                    transition ease-in-out delay-150 group-hover:scale-90 rounded-lg"/>
                    <div
                    className="absolute inset-0 flex items-center justify-center text-white 
                    font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Click view Performance SUVs 
                    </div>
                    <p className="font-mono text-blue-400 tracking-tight">SUVs</p>
                </div>
                {/* Trucks */}
                <div className="text-center mx-4 relative group">
                    <Image src={perftruck} alt="Performance Truck" width={300} height={300} className="
                    mt-9 h-64 scale-75 group-hover:blur-custom-sm
                    transition ease-in-out delay-150 group-hover:scale-90 rounded-lg"/>
                    <div
                    className="absolute inset-0 flex items-center justify-center text-white 
                    font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Click view Performance Trucks 
                    </div>
                    <p className="font-mono text-blue-400 tracking-tight">Trucks</p>
                </div>
            </div>









        </div>

        
    );
}