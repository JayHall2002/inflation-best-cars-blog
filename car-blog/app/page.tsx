import Head from "next/head";
import Image from "next/image";
import './global.css';
import performancelogo from './images/performancecarlogo.jpeg';
import economylogo from './images/economygaslogo.jpg';
import electriclogo from './images/electriccarlogo.jpeg';

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
      <div className="flex flex-row justify-center mt-9 items-end">
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
          transition ease-in-out delay-150 group-hover:scale-90"/>
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
      </div>
      
    </div>
  );
}
