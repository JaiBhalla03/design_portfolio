import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Showcase from "./components/Showcase";
import Trending from "./components/Trending";
import Clients from "./components/Clients";
import Article from "./components/Article";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Showcase/>
      <Trending/>
      <Clients/>
      <Article/>
      <Contact/>
    </div>
  );
}
