{/* When Performance Sedans are selected it will take you here */}

{/* Required Imports */}
import Navbar from "../components/Navbar";

export default function Perfsedans() {
    return (
        <div>
            <Navbar />
            {/* Video Constant loop at top of page */}
            <div className="relative group">
                <a href="https://www.tiktok.com/@cars3006/video/7214602544734063878?q=rs7&t=1727116388245" target="_blank" rel="noopener noreferrer">
                    <video className="w-full rounded-lg blur-custom-sm"
                        style={{ height: '500px', objectFit: 'cover', objectPosition: 'center' }}
                        autoPlay
                        loop
                        muted
                    >
                        <source src="/videos/perfsedanintro.mp4" type="video/mp4" />
                    </video>
                </a>
                {/* Content Over Video */}
                <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-4xl font-bold font-mono p-2">
                    <h1>Performance Sedans</h1>
                </div>
                {/* Giving Credit to Video Creator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                    <a href="https://www.tiktok.com/@cars3006/video/7214602544734063878?q=rs7&t=1727116388245" target="_blank" rel="noopener noreferrer">
                        <button 
                            className="bg-blue-400 text-white mt-7 font-bold rounded-lg py-3 px-6 shadow-lg
                            transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-600"
                        >
                            Link to Video
                        </button>
                    </a>
                </div>
                <div className="flex justify-center text-center font-bold font-mono text-3xl text-blue-500 hover:scale-110 hover:text-gray-400 translate-y-7">
                    <h2>Top Performance Sedans</h2>
                    <div className="absolute inset-0 group-hover:bg-transparent" />
                </div>
            </div>

            {/* Section Title */}
            <div className="mt-12 text-3xl font-mono tracking-tight text-blue-400 text-center">
                <h2>Best Performance Sedans Under $40k</h2>
            </div>

            {/* Videos Side by Side */}
            <div className="flex justify-between space-x-8 p-20 m-14 items-start">
                {/* BMW M340i */}
                <div className="relative group w-1/3 flex flex-col" style={{ height: '500px' }}>
                    <a href="https://www.tiktok.com/@g20_mukha/video/7307255756624121131?q=m340i%20rocars&t=1727116983483" target="_blank" rel="noopener noreferrer">
                        <div className="relative h-full">
                            <video
                                className="w-full h-full rounded-lg object-cover group-hover:blur-lg"
                                autoPlay
                                loop
                                muted
                            >
                                <source src="/videos/m340i.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </a>
                    <div className="absolute inset-0 flex items-center justify-center z-20 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ul className="mt-2 bg-black bg-opacity-60 p-4 rounded-lg">
                            <li className="text-center">BMW M340i</li>
                            <li className="text-center">Engine: 3.0L Turbo I-6 (B58)</li>
                            <li className="text-center">Power: 382 HP</li>
                            <li className="text-center">Torque: 369 lb-ft</li>
                            <li className="text-center">0 - 60 mph: 4.1 sec</li>
                            <li className="text-center">Top Speed: 155 mph</li>
                            <li className="text-center">Price: $40,000</li>
                        </ul>
                    </div>
                    {/* Button for the M340i */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                        <a href="https://www.tiktok.com/@g20_mukha/video/7307255756624121131?q=m340i%20rocars&t=1727116983483" target="_blank" rel="noopener noreferrer">
                            <button
                                className="bg-blue-400 text-white mt-7 font-bold rounded-lg py-3 px-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-600"
                            >
                                Link to Video
                            </button>
                        </a>
                    </div>
                </div>

                {/* Audi S4 */}
                <div className="relative group w-1/3 flex flex-col" style={{ height: '500px' }}>
                    <a href="https://www.tiktok.com/@kierankoh/video/7051537279940119809?q=audi%20s4%20cinematic&t=1727117892593" target="_blank" rel="noopener noreferrer">
                        <div className="relative h-full">
                            <video
                                className="w-full h-full rounded-lg object-cover group-hover:blur-lg"
                                autoPlay
                                loop
                                muted
                            >
                                <source src="/videos/audis4.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </a>
                    <div className="absolute inset-0 flex items-center justify-center z-20 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ul className="mt-2 bg-black bg-opacity-60 p-4 rounded-lg">
                            <li className="text-center">Audi S4</li>
                            <li className="text-center">Engine: 3.0L Turbo V6</li>
                            <li className="text-center">Power: 349 HP</li>
                            <li className="text-center">Torque: 369 lb-ft</li>
                            <li className="text-center">0 - 60 mph: 4.4 sec</li>
                            <li className="text-center">Top Speed: 155 mph</li>
                            <li className="text-center">Price: $39,000</li>
                        </ul>
                    </div>
                    {/* Button for the Audi S4 */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                        <a href="https://www.tiktok.com/@kierankoh/video/7051537279940119809?q=audi%20s4%20cinematic&t=1727117892593" target="_blank" rel="noopener noreferrer">
                            <button
                                className="bg-blue-400 text-white mt-7 font-bold rounded-lg py-3 px-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-600"
                            >
                                Link to Video
                            </button>
                        </a>
                    </div>
                </div>

                {/* Kia Stinger GT */}
                <div className="relative group w-1/3 flex flex-col" style={{ height: '500px' }}>
                    <a href="https://www.tiktok.com/@uk_car.edits/video/7330032106615082272?q=kia%20stinger%20edit&t=1727118604814" target="_blank" rel="noopener noreferrer">
                        <div className="relative h-full">
                            <video
                                className="w-full h-full rounded-lg object-cover group-hover:blur-lg"
                                autoPlay
                                loop
                                muted
                            >
                                <source src="/videos/kiastingergt.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </a>
                    <div className="absolute inset-0 flex items-center justify-center z-20 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ul className="mt-2 bg-black bg-opacity-60 p-4 rounded-lg">
                            <li className="text-center">Kia Stinger GT</li>
                            <li className="text-center">Engine: 3.3L TT-V6</li>
                            <li className="text-center">Power: 368 HP</li>
                            <li className="text-center">Torque: 376 lb-ft</li>
                            <li className="text-center">0 - 60 mph: 4.7 sec</li>
                            <li className="text-center">Top Speed: 167 mph</li>
                            <li className="text-center">Price: $38,000</li>
                        </ul>
                    </div>
                    {/* Button for the Kia Stinger GT */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                        <a href="https://www.tiktok.com/@uk_car.edits/video/7330032106615082272?q=kia%20stinger%20edit&t=1727118604814" target="_blank" rel="noopener noreferrer">
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
                <h2>Best Performance Sedans Under $60k</h2>
            </div>
            {/* 60k Videos Side by Side */}
            <div className="flex justify-between space-x-8 p-20 m-14 items-start">
                {/* Cadillac CT4-v Blackwing */}
                <div className="relative group w-1/3 flex flex-col" style={{ height: '500px' }}>
                    <a href="https://www.tiktok.com/@lf4.alberto/video/7384255307859365163?q=ct4%20v%20blacking&t=1727119028573" target="_blank" rel="noopener noreferrer">
                        <div className="relative h-full">
                            <video
                                className="w-full h-full rounded-lg object-cover group-hover:blur-lg"
                                autoPlay
                                loop
                                muted
                            >
                                <source src="/videos/ct4v.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </a>
                    <div className="absolute inset-0 flex items-center justify-center z-20 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ul className="mt-2 bg-black bg-opacity-60 p-4 rounded-lg">
                            <li className="text-center">CT4-V Blackwing</li>
                            <li className="text-center">Engine: 3.6L Twin-Turbo V6</li>
                            <li className="text-center">Power: 472 HP</li>
                            <li className="text-center">Torque: 445 lb-ft</li>
                            <li className="text-center">0 - 60 mph: 3.9 sec</li>
                            <li className="text-center">Top Speed: 189 mph</li>
                            <li className="text-center">Price: $57,000</li>
                        </ul>
                    </div>
                    {/* Button for the CT4V */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                        <a href="https://www.tiktok.com/@lf4.alberto/video/7384255307859365163?q=ct4%20v%20blacking&t=1727119028573" target="_blank" rel="noopener noreferrer">
                            <button
                                className="bg-blue-400 text-white mt-7 font-bold rounded-lg py-3 px-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-600"
                            >
                                Link to Video
                            </button>
                        </a>
                    </div>
                </div>

                {/* Audi RS5 */}
                <div className="relative group w-1/3 flex flex-col" style={{ height: '500px' }}>
                    <a href="https://www.tiktok.com/@quattrors4/video/7407115845639408928?q=rs5%20sportback%20cinematic&t=1727119394823" target="_blank" rel="noopener noreferrer">
                        <div className="relative h-full">
                            <video
                                className="w-full h-full rounded-lg object-cover group-hover:blur-lg"
                                style={{ height: '82%', objectFit: 'cover' }}
                                autoPlay
                                loop
                                muted
                            >
                                <source src="/videos/rs5.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </a>
                    <div className="absolute inset-0 flex items-center justify-center z-20 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ul className="mt-2 bg-black bg-opacity-60 p-4 rounded-lg">
                            <li className="text-center">Audi RS5</li>
                            <li className="text-center">Engine: 3.6L Twin-Turbo V6</li>
                            <li className="text-center">Power: 472 HP</li>
                            <li className="text-center">Torque: 445 lb-ft</li>
                            <li className="text-center">0 - 60 mph: 3.9 sec</li>
                            <li className="text-center">Top Speed: 189 mph</li>
                            <li className="text-center">Price: $57,000</li>
                        </ul>
                    </div>
                    {/* Button for the RS5 */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                        <a href="https://www.tiktok.com/@quattrors4/video/7407115845639408928?q=rs5%20sportback%20cinematic&t=1727119394823" target="_blank" rel="noopener noreferrer">
                            <button
                                className="bg-blue-400 text-white mt-7 font-bold rounded-lg py-3 px-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-600"
                            >
                                Link to Video
                            </button>
                        </a>
                    </div>
                </div>

                {/* F80 M3 */}
                <div className="relative group w-1/3 flex flex-col" style={{ height: '500px' }}>
                    <a href="https://www.tiktok.com/@f80rak/video/7356127333557865770?q=f80%20m3&t=1727121371173" target="_blank" rel="noopener noreferrer">
                        <div className="relative h-full">
                            <video
                                className="w-full h-full rounded-lg object-cover group-hover:blur-lg"
                                autoPlay
                                loop
                                muted
                            >
                                <source src="/videos/f80m3.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </a>
                    <div className="absolute inset-0 flex items-center justify-center z-20 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ul className="mt-2 bg-black bg-opacity-60 p-4 rounded-lg">
                            <li className="text-center">BMW M3 (F80)</li>
                            <li className="text-center">Engine: 3.0L TT I6</li>
                            <li className="text-center">Power: 425 HP</li>
                            <li className="text-center">Torque: 406 lb-ft</li>
                            <li className="text-center">0 - 60 mph: 4.1 sec</li>
                            <li className="text-center">Top Speed: 155 mph</li>
                            <li className="text-center">Price: $50,000</li>
                        </ul>
                    </div>
                    {/* Button for the F80 M3 */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                        <a href="https://www.tiktok.com/@f80rak/video/7356127333557865770?q=f80%20m3&t=1727121371173" target="_blank" rel="noopener noreferrer">
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
                <h2>Best Performance Sedans Under $80k</h2>
            </div>
            {/* 80k Videos Side by Side */}
            <div className="flex justify-between space-x-8 p-20 m-14 items-start">
                {/* G80 M3 */}
                <div className="relative group w-1/3 flex flex-col" style={{ height: '500px' }}>
                    <a href="https://www.tiktok.com/@g80.dj/video/7297297288702119214?q=g80%20m3&t=1727121740169" target="_blank" rel="noopener noreferrer">
                        <div className="relative h-full">
                            <video
                                className="w-full h-full rounded-lg object-cover group-hover:blur-lg"
                                autoPlay
                                loop
                                muted
                            >
                                <source src="/videos/g80m3.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </a>
                    <div className="absolute inset-0 flex items-center justify-center z-20 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ul className="mt-2 bg-black bg-opacity-60 p-4 rounded-lg">
                            <li className="text-center">BMW M3 (G80)</li>
                            <li className="text-center">Engine: 3.0L TT I-6</li>
                            <li className="text-center">Power: 503 HP</li>
                            <li className="text-center">Torque: 479 lb-ft</li>
                            <li className="text-center">0 - 60 mph: 3.4 sec</li>
                            <li className="text-center">Top Speed: 180 mph</li>
                            <li className="text-center">Price: $70,000</li>
                        </ul>
                    </div>
                    {/* Button for the G80 */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                        <a href="https://www.tiktok.com/@g80.dj/video/7297297288702119214?q=g80%20m3&t=1727121740169" target="_blank" rel="noopener noreferrer">
                            <button
                                className="bg-blue-400 text-white mt-7 font-bold rounded-lg py-3 px-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-600"
                            >
                                Link to Video
                            </button>
                        </a>
                    </div>
                </div>

                {/* CT5-V Blackwing */}
                <div className="relative group w-1/3 flex flex-col" style={{ height: '500px' }}>
                    <a href="https://www.tiktok.com/@tompeacockcadillac/video/7336674450382933294?q=ct5v%20blackwing%20cinematic&t=1727122082950" target="_blank" rel="noopener noreferrer">
                        <div className="relative h-full">
                            <video
                                className="w-full h-full rounded-lg object-cover group-hover:blur-lg"
                                autoPlay
                                loop
                                muted
                            >
                                <source src="/videos/ct5v.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </a>
                    <div className="absolute inset-0 flex items-center justify-center z-20 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ul className="mt-2 bg-black bg-opacity-60 p-4 rounded-lg">
                            <li className="text-center">Cadillac CT5-V Blackwing (G82)</li>
                            <li className="text-center">Engine: 6.2L SuperCharged V8</li>
                            <li className="text-center">Power: 668 HP</li>
                            <li className="text-center">Torque: 659 lb-ft</li>
                            <li className="text-center">0 - 60 mph: 3.4 sec</li>
                            <li className="text-center">Top Speed: 200 mph</li>
                            <li className="text-center">Price: $75,000</li>
                        </ul>
                    </div>
                    {/* Button for the CT5-V Blackwing */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                        <a href="https://www.tiktok.com/@tompeacockcadillac/video/7336674450382933294?q=ct5v%20blackwing%20cinematic&t=1727122082950" target="_blank" rel="noopener noreferrer">
                            <button
                                className="bg-blue-400 text-white mt-7 font-bold rounded-lg py-3 px-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-600"
                            >
                                Link to Video
                            </button>
                        </a>
                    </div>
                </div>

                {/* Hellcat Charger */}
                <div className="relative group w-1/3 flex flex-col" style={{ height: '500px' }}>
                    <a href="https://www.tiktok.com/@1_uriel1/video/7280034686687071531?q=hellcat%20charger%20&t=1727122407696" target="_blank" rel="noopener noreferrer">
                        <div className="relative h-full">
                            <video
                                className="w-full h-full rounded-lg object-cover group-hover:blur-lg"
                                autoPlay
                                loop
                                muted
                            >
                                <source src="/videos/hellcat.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </a>
                    <div className="absolute inset-0 flex items-center justify-center z-20 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ul className="mt-2 bg-black bg-opacity-60 p-4 rounded-lg">
                            <li className="text-center">Dodge Charger Hellcat Widebody</li>
                            <li className="text-center">Engine: 6.2L SuperCharged V8</li>
                            <li className="text-center">Power: 717 HP</li>
                            <li className="text-center">Torque: 650 lb-ft</li>
                            <li className="text-center">0 - 60 mph: 3.5 sec</li>
                            <li className="text-center">Top Speed: 196 mph</li>
                            <li className="text-center">Price: $77,000</li>
                        </ul>
                    </div>
                    {/* Button for the Hellcat */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                        <a href="https://www.tiktok.com/@1_uriel1/video/7280034686687071531?q=hellcat%20charger%20&t=1727122407696" target="_blank" rel="noopener noreferrer">
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
