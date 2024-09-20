import Head from "next/head";
import './global.css';

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

    </div>
  );
}
