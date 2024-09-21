import Link from "next/link";
import "../global.css";

export default function Navbar () {
    return(
        <nav className="bg-white-800 text-blue py-4">
            <div className="container mx-auto flex  justify-between items-center">
                <Link href="/" passHref>
                    <h1 className="text-4xl text-blue-400 hover:scale-110 hover:text-gray-900 font-bold">Aj's Car Blog</h1>
                </Link>
                <ul className="flex space-x-8">
                    <li>
                        <Link href="/" passHref>
                            <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                            before:bottom-0 before:left-0 before:bg-black
                            before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                            before:transition before:ease-in-out before:duration-700 hover:text-blue-400 ">
                                Home
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/ecocar" passHref>
                            <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                            before:bottom-0 before:left-0 before:bg-black
                            before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                            before:transition before:ease-in-out before:duration-700 hover:text-blue-400">
                                Economy
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/luxcar" passHref>
                            <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                            before:bottom-0 before:left-0 before:bg-black
                            before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                            before:transition before:ease-in-out before:duration-700 hover:text-blue-400">
                                Luxury
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/evcar" passHref>
                            <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                            before:bottom-0 before:left-0 before:bg-black
                            before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                            before:transition before:ease-in-out before:duration-700 hover:text-blue-400">
                                Electric
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/perfcar" passHref>
                            <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                            before:bottom-0 before:left-0 before:bg-black
                            before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                            before:transition before:ease-in-out before:duration-700 hover:text-blue-400">
                                Performance
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}