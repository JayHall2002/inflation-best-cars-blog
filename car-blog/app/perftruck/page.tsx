{/* When Performance Truck Segment is Selected it will take you here */}

{/* Required Imports */}
import Navbar from "../components/Navbar";
import Image from "next/image";
import fordcoy from '../images/coyoteford.jpeg';
import ramtrx from '../images/trxram.jpeg';
import fordrap from '../images/fordrap.jpeg'
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
            {/* Introducing a  Truck List */}
            <div className="text-center font-bold font-mono text-4xl mt-7 text-blue-500 hover:scale-110 hover:text-gray-400"> 
                <h2>Top Performance Trucks</h2>
            </div>
            <h3 className="text-center font-mono">This will be a list of the Top Performance trucks as of September 2024 at each price point</h3>
            {/* Best Truck Under $40k */}
            <div>
                <h2 className="text-2xl mt-9 font-mono tracking-tight text-blue-400">BestTruck under $40k</h2>
            </div>
            <div className="flex items-center mt-8 p-4">
                <div className="flex-shrink-0 relative group">
                    <Image src={fordcoy} alt="Ford F150" width={300} height={300}
                    className="rounded-lg group-hover:scale-110 group-hover:blur-custom-sm" 
                    />
                    <div
                    className="absolute inset-0 flex items-center justify-center text-white 
                    font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ul className="mt-2">
                            <li>Engine: V8 Coyote</li>
                            <li>Power: 450 hp</li>
                            <li>Torque: 510 lb-ft</li>
                            <li>0-60 mph: 5.4 seconds</li>
                            <li>Towing Capacity: 14,000 lbs</li> 
                        </ul>
                    </div>
                </div>
                
                
                <div className="ml-4">
                    <h2 className="text-2xl font-mono tracking-tight text-blue-400">Ford F150</h2>
                    <p className="text-lg font-mono">
                        The Ford F150 is equipped with the same 5.0L V8 that is present in the Ford Mustang GT
                        which is known to have a robust engine capacable of supporting 700+ hp builds by simply
                        adding boost. Used examples can be had for under $40k.
                    </p>
                </div>
            </div>
            {/* Best Truck Under $80k */}
            <div>
                <h2 className="text-2xl mt-9 font-mono tracking-tight text-blue-400">Best Truck Under $80k</h2>
            </div>
            <div className="flex items-center mt-8 p-4">
                {/* Description on the Left */}
                <div className="mr-4">
                    <h2 className="text-2xl font-mono tracking-tight text-blue-400">Ram TRX</h2>
                    <p className="text-lg font-mono">
                        The Ram TRX It boasts a supercharged 6.2-liter HEMI V8, producing 702 horsepower,
                        making it one of the most powerful trucks on the market. It includes impressive 
                        features like launch control, adaptive dampers, and all-terrain tires, 
                        ensuring a thrilling driving experience. Used examples can be found for $70-$75k
                        decent mileage.
                    </p>
                </div>

                {/* Image on the Right */}
                <div className="flex-shrink-0 relative group">
                    <Image
                        src={ramtrx}
                        alt="Ram TRX"
                        width={300}
                        height={300}
                        className="rounded-lg group-hover:scale-110 group-hover:blur-custom-sm"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ul className="mt-2">
                            <li>Engine: 6.2-liter supercharged V8</li>
                            <li>Power: 702 hp</li>
                            <li>Torque: 650 lb-ft</li>
                            <li>0-60 mph: 4.5 seconds</li>
                            <li>Towing Capacity: 8,100 lbs</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Best Truck Under $100k */}
            <div>
                <h2 className="text-2xl mt-9 font-mono tracking-tight text-blue-400">Best Truck under $100k</h2>
            </div>
            <div className="flex items-center mt-8 p-4">
                <div className="flex-shrink-0 relative group">
                    <Image src={fordrap} alt="Ford Raptor" width={300} height={300}
                    className="rounded-lg group-hover:scale-110 group-hover:blur-custom-sm" 
                    />
                    <div
                    className="absolute inset-0 flex items-center justify-center text-white 
                    font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ul className="mt-2">
                            <li>Engine: 5.2L Supercharged V8</li>
                            <li>Power: 700 hp</li>
                            <li>Torque: 640 lb-ft</li>
                            <li>0-60 mph: 3.7 seconds</li>
                            <li>Towing Capacity: 8,700 lbs</li> 
                        </ul>
                    </div>
                </div>
                
                
                <div className="ml-4">
                    <h2 className="text-2xl font-mono tracking-tight text-blue-400">Ford F150 Raptor R</h2>
                    <p className="text-lg font-mono">
                    The Ford Raptor R edges out the Ram TRX with its lighter aluminum body, 
                    making it more agile in off-road situations. Its Fox Racing Live Valve suspension 
                    and standard 37-inch tires provide superior high-speed off-road handling and ground 
                    clearance. While both trucks offer immense power, the Raptor R's performance-focused 
                    engineering, coupled with its 5.2-liter supercharged V8, gives it an edge in off-road 
                    capability and control, making it ideal for extreme terrain.
                    </p>
                </div>
            </div>
        </div>
    );
}
