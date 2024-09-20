import Head from "next/head";
import Image from "next/image";
import './global.css';
import performancelogo from './images/performancecarlogo.jpeg';
import economylogo from './images/economygaslogo.jpg';
import electriclogo from './images/electriccarlogo.jpeg';
import luxurycarlogo from './images/luxurycarlogo.jpeg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aj's Car Blog</title>
        <meta name="description" content="Find the best cars in every segment at your price point." />
      </Head>
      <h1 className="titleonhome 
      text-6xl font-bold text-center mt-4 
      webkit-font-smoothing: antialiased 
      font-style: italic text-gray-400 hover:text-gray-600">
        Aj's Car Blog
      </h1>
      <h2 className="descriptiononhome 
      text-center mt-6  font-mono text-blue-400 tracking-tight">
        Learn About the Best Cars in Each Segment
      </h2>

      
      {/*Performance Car Segment Logo and Effects*/}
      <div className="flex flex-row justify-center mt-9">
        <div className="text-center mx-4 relative group">
          <Image src={performancelogo} alt="Performance Car Segment" width={300} height={300}
          className="performance-logo mt-9 h-64 scale-75 blur-custom-sm group-hover:blur-none
          transition ease-in-out delay-150 group-hover:scale-90" />
          <div
          className="absolute inset-0 flex items-center justify-center text-white 
          font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to Explore Segment 
          </div>
          <p className="font-mono text-blue-400 tracking-tight">Performance Cars</p>
        </div>


        {/*Economy Car Segment Logo and Effects*/}
        <div className="text-center mx-4 relative group">
          <Image src={economylogo} alt="Economy Car Segment" width={300} height={300} 
          className="mt-9 h-64 scale-75 blur-custom-sm group-hover:blur-none
          transition ease-in-out delay-150 group-hover:scale-90 "/>
          <div
          className="absolute inset-0 flex items-center justify-center text-white 
          font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to Explore Segment 
          </div>
          <p className="font-mono text-blue-400 tracking-tight">Economy Cars</p>
        </div>


        {/*Electric Car Logo and Effects*/}
        <div className="text-center mx-4 relative group">
          <Image src={electriclogo} alt="Electric Car Segment" width={300} height={300} 
          className="mt-9 h-64 scale-75 blur-custom-sm group-hover:blur-none 
          transition ease-in-out delay-150 group-hover:scale-90"/>
          <div
          className="absolute inset-0 flex items-center justify-center text-white 
          font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to Explore Segment 
          </div>
          <p className="font-mono text-blue-400 tracking-tight">Electric Cars</p>
        </div>

        {/* Luxury Car Logo and Effects */}
        <div className="text-center mx-4 relative group">
          <Image src={luxurycarlogo} alt="Electric Car Segment" width={300} height={300}
          className="mt-9 h-64 scale-75 blur-custom-sm group-hover:blur-none
          transition ease-in-out delay-150 group-hover:scale-90"/>
          <p className="font-mono text-blue-400 tracking-tight">Luxury Cars</p>
          <div
          className="absolute inset-0 flex items-center justify-center text-white 
          font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to Explore Segment 
          </div>
        </div>
      </div>
      
      {/* This is will be where you can scroll down to view the definitions of the segments */}
      <div className="flex justify-center mt-20">
        <span className="relative flex h-18 w-18">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex items-center justify-center rounded-full h-16 w-16 bg-blue-400 text-white text-3xl">
          &#8595;
          </span>
        </span>
      </div>
      
      {/* Definitions of major four segments */}
      <h1 className="text-3xl font-bold text-start mt-9 
      webkit-font-smoothing: antialiased 
      font-style: italic text-gray-400 hover:text-gray-600">
        What are Performance Cars?
      </h1>
      <h2 className="font-medium mt-4 font-mono text-sm tracking-tight text-gray-700 ">
        High-performance cars are fun to drive, visually appealing, and have more powerful engines than the average car. 
        Performance vehicles come in a range of sizes and can be sports cars, muscle cars, or luxury cars. 
        These cars tend to drive great on open roads but may not be as fun to drive in stop-and-go traffic.
      </h2>
      {/* Economy Car Definition */}
      <h1 className="text-3xl font-bold text-start mt-9 
      webkit-font-smoothing: antialiased 
      font-style: italic text-gray-400 hover:text-gray-600">
        What are Economy Cars?
      </h1>
      <h2 className="font-medium mt-4 font-mono text-sm tracking-tight text-gray-700 ">
      An economy car is a small, affordable, and fuel-efficient vehicle that's typically lightweight 
      and has a compact size. Economy cars are often characterized by their simple design and minimalistic features.
      </h2>
      {/* Electric Car Definition */}
      <h1 className="text-3xl font-bold text-start mt-9 
      webkit-font-smoothing: antialiased 
      font-style: italic text-gray-400 hover:text-gray-600">
        What are Electric Cars?
      </h1>
      <h2 className="font-medium mt-4 font-mono text-sm tracking-tight text-gray-700 ">
      An EV is defined as a vehicle that can be powered by an electric motor that draws electricity from a 
      battery and is capable of being charged from an external source. An EV includes both a vehicle 
      that can only be powered by an electric motor that draws electricity from a battery (EV)
      and a vehicle that can be powered by an electric motor that draws electricity from a battery and 
      by an internal combustion engine (plug-in hybrid electric vehicle).
      </h2>
      {/* Luxury Car Definition */}
      <h1 className="text-3xl font-bold text-start mt-9 
      webkit-font-smoothing: antialiased 
      font-style: italic text-gray-400 hover:text-gray-600">
        What are Luxury Cars?
      </h1>
      <h2 className="font-medium mt-4 font-mono text-sm tracking-tight text-gray-700 ">
      Luxury vehicles go beyond that in offering the sorts of creature comforts, 
      modern technologies, and high-quality materials that aren’t technically necessary, 
      but do make driving a whole lot more enjoyable
      </h2>

      {/* Citing Sources for definitions */}
      <h1 className="text-center text-3xl font-semibold mt-9 ">
        Sources
      </h1>
      <div className="flex flex-row justify-center space-x-9">
        <a href="https://www.mileone.com/blog/2021/august/20/what-qualifies-as-a-luxury-vehicle.htm" target="_blank">
          <button className="w-40 h-20 text-white bg-gray-400 rounded-full hover:bg-blue-400
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
          transition ease-in-out delay-150 hover:scale-90">
            Mileone Auto Group
          </button>
        </a>

        <a href="https://afdc.energy.gov/laws/12660" target="_blank">
          <button className="w-40 h-20 text-white bg-gray-400 rounded-full hover:bg-blue-400
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
          transition ease-in-out delay-150 hover:scale-90">
            Department of Energy
          </button>
        </a>

        <a href="https://www.enterprise.com/en/car-rental/vehicles/us/cars/economy.html" target="_blank">
          <button className="w-40 h-20 text-white bg-gray-400 rounded-full hover:bg-blue-400
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
          transition ease-in-out delay-150 hover:scale-90">
            Enterprise
          </button>
        </a>

        <a href="https://www.progressive.com/answers/what-is-a-high-performance-car/" target="_blank">
          <button className="w-40 h-20 text-white bg-gray-400 rounded-full hover:bg-blue-400
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
          transition ease-in-out delay-150 hover:scale-90">
            Progressive
          </button>
        </a>
      </div>
    </div>
  );
}
