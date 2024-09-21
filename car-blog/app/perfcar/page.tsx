{/* When Performance car image segment on the Home page is selected it will take you here */}
import Navbar from "../components/Navbar";
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
        {/* Blue Arrow */}
        </div>
            <div className="flex justify-center mt-20">
                <span className="relative flex h-18 w-18">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex items-center justify-center rounded-full h-16 w-16 bg-blue-400 text-white text-3xl">
                        &#8595;
                    </span>
                </span>
            </div>
        </div>
        
    );
}