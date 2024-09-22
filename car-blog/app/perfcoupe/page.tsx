{/* When Performance Sedans are selected it will take you here */}

{/* Required Imports */}
import Navbar from "../components/Navbar";
import Image from "next/image";
import camltone from '../images/lt1.jpeg'
import f82m4 from '../images/f82m4.jpeg'
export default function Perfcoupes () {
    return (
        <div>
            < Navbar/>
            {/* Video Constant loop at top of page */}
            <div className="relative group">
                <a href="https://www.youtube.com/watch?v=HiKRNunVHBI&ab_channel=GrawYt" target="_blank" rel="noopener noreferrer">
                    <video className="w-full rounded-lg blur-custom-sm"
                        style={{ height:'500px', objectFit: 'cover', objectPosition: 'center'}}
                        autoPlay
                        loop
                        muted
                    >
                        <source src="/videos/perfcoupeintro.mp4" type="video/mp4" />
                    </video>
                </a>
                {/* Content Over Video */}
                <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-4xl font-bold font-mono p-2">
                    <h1>Performance Coupes</h1>
                </div>
                {/* Giving Credit to Video Creator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                    <a href="https://www.youtube.com/watch?v=HiKRNunVHBI&ab_channel=GrawYt" target="_blank" rel="noopener noreferrer">
                        <button 
                        className="bg-blue-400
                        text-white mt-7 font-bold rounded-lg py-3 px-6 shadow-lg
                        transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-600"
                        >
                            Link to Video
                        </button>
                    </a>
                </div>
                <div className="flex justify-center text-center font-bold font-mono text-3xl text-blue-500 hover:scale-110 hover:text-gray-400
                translate-y-7">
                    <h2>Top Performance Coupes</h2><div className="absolute inset-0 group-hover:bg-transparent" />
                </div>

            </div>
        <div className="translate-y-9 text-xl font-mono tracking-tight text-blue-400">
            <h2>Best Performance Coupes Under $40k</h2>
        </div>
        {/* Camaro LT1 */}
        <div className="flex items-center mt-8 p-4">
            <div className="flex-shrink-0 relative group">
                <Image src={camltone} alt="Camaro LT1" width={300} height={300}
                className="translate-y-9 rounded-lg group-hover:scale-110 group-hover:blur-custom-sm"/>
                <div className="absolute inset-0 flex items-center justify-center text-white 
                font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ul className="mt-2 translate-y-4">
                        <li>Engine: 6.2L V8</li>
                        <li>Power: 455 HP</li>
                        <li>Torque: 455 lb-ft</li>
                        <li>0 - 60 mph: 4.0 sec</li>
                        <li>Top Speed: 165 mph</li>
                        <li>Price: $38,000</li>
                    </ul>
                </div>
            </div>
            <div className="ml-4">
                    <h2 className="text-2xl font-mono tracking-tight text-blue-400">Chevy Camaro LT1</h2>
                    <p className="text-lg font-mono translate-y-7">
                    The Camaro LT1 is one of the most affordable V8-powered performance cars on the market.
                    It provides the thrill of a high-horsepower engine combined with precise handling, 
                    making it ideal for both daily driving and track days.
                    </p>
            </div>
        </div>
        {/* BMW M4 (F82) */}
        <div className="flex items-center mt-8 p-4">
                {/* Description on the Left */}
                <div className="mr-4">
                    <h2 className="text-2xl font-mono tracking-tight text-blue-400">BMW M4 (F82)</h2>
                    <p className="text-lg font-mono">
                    The F82 BMW M4 is a thrilling used sports coupe available for under $40K, 
                    typically with around 50K miles. It boasts a turbocharged inline-six engine 
                    delivering up to 425 hp, exceptional handling, and a luxurious interior, 
                    making it a perfect blend of performance and everyday usability. 
                    With its strong enthusiast community and excellent value for money, the M4 offers 
                    an exhilarating driving experience without compromising practicality.
                    </p>
                </div>

                {/* Image on the Right */}
                <div className="flex-shrink-0 relative group">
                    <Image
                        src={f82m4}
                        alt="BMW M4 (F82)"
                        width={300}
                        height={300}
                        className="rounded-lg group-hover:scale-110 group-hover:blur-custom-sm"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ul className="mt-2">
                            <li>Engine: 3.0L Twin-Turbo I-6</li>
                            <li>Power: 425 hp</li>
                            <li>Torque: 406 lb-ft</li>
                            <li>0-60 mph: 3.7 seconds</li>
                            <li>Top Speed: 155 mph</li>
                            <li>Price: $39k (Used)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}