import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Features from "./components/Features";
import Working from "./components/Working";
import Consultation from "./components/Consultation";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Library from "./components/Library";


export default function Home() {
  return (
  <>
   <Navbar/>
   <Hero/>
   <Intro/>
   <Features/>
   <Working/>
   <Consultation/>
   <Reviews/>
   <Library/>
   <Footer/>
  </>

   
  
  );
}
