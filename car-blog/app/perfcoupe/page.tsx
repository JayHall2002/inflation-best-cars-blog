{/* When Performance Sedans are selected it will take you here */}

{/* Required Imports */}
import Navbar from "../components/Navbar";

export default function Perfcoupes() {
    return (
        <div>
            <Navbar />
            {/* Video Constant loop at top of page */}
            <div className="relative group">
                <a href="https://www.youtube.com/watch?v=HiKRNunVHBI&ab_channel=GrawYt" target="_blank" rel="noopener noreferrer">
                    <video className="w-full rounded-lg blur-custom-sm"
                        style={{ height: '500px', objectFit: 'cover', objectPosition: 'center' }}
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
                            className="bg-blue-400 text-white mt-7 font-bold rounded-lg py-3 px-6 shadow-lg
                            transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-600"
                        >
                            Link to Video
                        </button>
                    </a>
                </div>
                <div className="flex justify-center text-center font-bold font-mono text-3xl text-blue-500 hover:scale-110 hover:text-gray-400 translate-y-7">
                    <h2>Top Performance Coupes</h2>
                    <div className="absolute inset-0 group-hover:bg-transparent" />
                </div>
            </div>

            {/* Section Title */}
            <div className="mt-12 text-3xl font-mono tracking-tight text-blue-400 text-center">
                <h2>Best Performance Coupes Under $40k</h2>
            </div>

            {/* Videos Side by Side */}
            <div className="flex justify-between space-x-8 p-20 m-14 items-start">
                {/* Camaro LT1 */}
                <div className="relative group w-1/3 flex flex-col" style={{ height: '500px' }}>
                    <a href="https://www.youtube.com/shorts/ZbQjwS0YPxY" target="_blank" rel="noopener noreferrer">
                        <div className="relative h-full">
                            <video
                                className="w-full h-full rounded-lg object-cover group-hover:blur-lg"
                                autoPlay
                                loop
                                muted
                            >
                                <source src="/videos/marolt1.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </a>
                    <div className="absolute inset-0 flex items-center justify-center z-20 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ul className="mt-2 bg-black bg-opacity-60 p-4 rounded-lg">
                            <li className="text-center">Camaro LT1</li>
                            <li className="text-center">Engine: 6.2L V8</li>
                            <li className="text-center">Power: 455 HP</li>
                            <li className="text-center">Torque: 455 lb-ft</li>
                            <li className="text-center">0 - 60 mph: 4.0 sec</li>
                            <li className="text-center">Top Speed: 165 mph</li>
                            <li className="text-center">Price: $38,000</li>
                        </ul>
                    </div>
                    {/* Button for the first Camaro */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                        <a href="https://www.youtube.com/shorts/ZbQjwS0YPxY" target="_blank" rel="noopener noreferrer">
                            <button
                                className="bg-blue-400 text-white mt-7 font-bold rounded-lg py-3 px-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-600"
                            >
                                Link to Video
                            </button>
                        </a>
                    </div>
                </div>

                {/* BMW M4 (F82) */}
                <div className="relative group w-1/3 flex flex-col" style={{ height: '500px' }}>
                    <a href="https://www.tiktok.com/@cars.bmwf82/video/7365109316648537377?q=f82%20m4&t=1727107869565" target="_blank" rel="noopener noreferrer">
                        <div className="relative h-full">
                            <video
                                className="w-full h-full rounded-lg object-cover group-hover:blur-lg"
                                autoPlay
                                loop
                                muted
                            >
                                <source src="/videos/bmwm4.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </a>
                    <div className="absolute inset-0 flex items-center justify-center z-20 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ul className="mt-2 bg-black bg-opacity-60 p-4 rounded-lg">
                            <li className="text-center">BMW M4</li>
                            <li className="text-center">Engine: 3.0L TT-I6</li>
                            <li className="text-center">Power: 425 HP</li>
                            <li className="text-center">Torque: 406 lb-ft</li>
                            <li className="text-center">0 - 60 mph: 4.0 sec</li>
                            <li className="text-center">Top Speed: 165 mph</li>
                            <li className="text-center">Price: $39,000 (Used)</li>
                        </ul>
                    </div>
                    {/* Button for the BMW M4 */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                        <a href="https://www.tiktok.com/@cars.bmwf82/video/7365109316648537377?q=f82%20m4&t=1727107869565" target="_blank" rel="noopener noreferrer">
                            <button
                                className="bg-blue-400 text-white mt-7 font-bold rounded-lg py-3 px-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-600"
                            >
                                Link to Video
                            </button>
                        </a>
                    </div>
                </div>

                {/* Corvette Z06 */}
                <div className="relative group w-1/3 flex flex-col" style={{ height: '500px' }}>
                    <a href="https://www.tiktok.com/@bespoke.sam/video/7361277086209690922?q=c6%20z06&t=1727103456372" target="_blank" rel="noopener noreferrer">
                        <div className="relative h-full">
                            <video
                                className="w-full h-full rounded-lg object-cover group-hover:blur-lg"
                                autoPlay
                                loop
                                muted
                            >
                                <source src="/videos/c6z06.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </a>
                    <div className="absolute inset-0 flex items-center justify-center z-20 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ul className="mt-2 bg-black bg-opacity-60 p-4 rounded-lg">
                            <li className="text-center">Corvette Z06 C6</li>
                            <li className="text-center">Engine: 7.0L LS7 V8</li>
                            <li className="text-center">Power: 505 HP</li>
                            <li className="text-center">Torque: 470 lb-ft</li>
                            <li className="text-center">0 - 60 mph: 3.7 sec</li>
                            <li className="text-center">Top Speed: 198 mph</li>
                            <li className="text-center">Price: $38,000</li>
                        </ul>
                    </div>
                    {/* Button for the Z06 C6 */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                        <a href="https://www.tiktok.com/@bespoke.sam/video/7361277086209690922?q=c6%20z06&t=1727103456372" target="_blank" rel="noopener noreferrer">
                            <button
                                className="bg-blue-400 text-white mt-7 font-bold rounded-lg py-3 px-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-600"
                            >
                                Link to Video
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Section Title */}
            <div className="mt-12 text-3xl font-mono tracking-tight text-blue-400 text-center translate-y-9">
                <h2>Best Performance Coupes Under $60k</h2>
            </div>
            {/* 60k Videos Side by Side */}
            <div className="flex justify-between space-x-8 p-20 m-14 items-start">
                {/* BMW M240i */}
                <div className="relative group w-1/3 flex flex-col" style={{ height: '500px' }}>
                    <a href="https://www.tiktok.com/@autoidtv/video/7189573912781475078?q=m240i%20build&t=1727112234009" target="_blank" rel="noopener noreferrer">
                        <div className="relative h-full">
                            <video
                                className="w-full h-full rounded-lg object-cover group-hover:blur-lg"
                                autoPlay
                                loop
                                muted
                            >
                                <source src="/videos/m240i.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </a>
                    <div className="absolute inset-0 flex items-center justify-center z-20 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ul className="mt-2 bg-black bg-opacity-60 p-4 rounded-lg">
                            <li className="text-center">BMW M240i</li>
                            <li className="text-center">Engine: 3.0L Turbo I-6</li>
                            <li className="text-center">Power: 382 HP</li>
                            <li className="text-center">Torque: 369 lb-ft</li>
                            <li className="text-center">0 - 60 mph: 4.1 sec</li>
                            <li className="text-center">Top Speed: 155 mph</li>
                            <li className="text-center">Price: $51,000</li>
                        </ul>
                    </div>
                    {/* Button for the M240i */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                        <a href="https://www.tiktok.com/@autoidtv/video/7189573912781475078?q=m240i%20build&t=1727112234009" target="_blank" rel="noopener noreferrer">
                            <button
                                className="bg-blue-400 text-white mt-7 font-bold rounded-lg py-3 px-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-600"
                            >
                                Link to Video
                            </button>
                        </a>
                    </div>
                </div>

                {/* Audi S5 */}
                <div className="relative group w-1/3 flex flex-col" style={{ height: '500px' }}>
                    <a href="https://www.tiktok.com/@glenmoreaudi/video/7361492139210968325?q=s5&t=1727112917632" target="_blank" rel="noopener noreferrer">
                        <div className="relative h-full">
                            <video
                                className="w-full h-full rounded-lg object-cover group-hover:blur-lg"
                                autoPlay
                                loop
                                muted
                            >
                                <source src="/videos/audis5.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </a>
                    <div className="absolute inset-0 flex items-center justify-center z-20 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ul className="mt-2 bg-black bg-opacity-60 p-4 rounded-lg">
                            <li className="text-center">Audi S5</li>
                            <li className="text-center">Engine: 3.0L TFSI V6</li>
                            <li className="text-center">Power: 349 HP</li>
                            <li className="text-center">Torque: 369 lb-ft</li>
                            <li className="text-center">0 - 60 mph: 4.4 sec</li>
                            <li className="text-center">Top Speed: 155 mph</li>
                            <li className="text-center">Price: $55,000</li>
                        </ul>
                    </div>
                    {/* Button for the Audi S5 */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                        <a href="https://www.tiktok.com/@glenmoreaudi/video/7361492139210968325?q=s5&t=1727112917632" target="_blank" rel="noopener noreferrer">
                            <button
                                className="bg-blue-400 text-white mt-7 font-bold rounded-lg py-3 px-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-600"
                            >
                                Link to Video
                            </button>
                        </a>
                    </div>
                </div>

                {/* Ford Mustang GT350 */}
                <div className="relative group w-1/3 flex flex-col" style={{ height: '500px' }}>
                    <a href="https://www.tiktok.com/@carnage5.2/video/7312897161715404074?q=gt350%20edit&t=1727113304131" target="_blank" rel="noopener noreferrer">
                        <div className="relative h-full">
                            <video
                                className="w-full h-full rounded-lg object-cover group-hover:blur-lg"
                                autoPlay
                                loop
                                muted
                            >
                                <source src="/videos/gt350.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </a>
                    <div className="absolute inset-0 flex items-center justify-center z-20 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ul className="mt-2 bg-black bg-opacity-60 p-4 rounded-lg">
                            <li className="text-center">Mustang GT350</li>
                            <li className="text-center">Engine: 5.2L Voodoo V8</li>
                            <li className="text-center">Power: 526 HP</li>
                            <li className="text-center">Torque: 429 lb-ft</li>
                            <li className="text-center">0 - 60 mph: 3.9 sec</li>
                            <li className="text-center">Top Speed: 160 mph</li>
                            <li className="text-center">Price: $55,000</li>
                        </ul>
                    </div>
                    {/* Button for the GT350 */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                        <a href="https://www.tiktok.com/@carnage5.2/video/7312897161715404074?q=gt350%20edit&t=1727113304131" target="_blank" rel="noopener noreferrer">
                            <button
                                className="bg-blue-400 text-white mt-7 font-bold rounded-lg py-3 px-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-600"
                            >
                                Link to Video
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}
