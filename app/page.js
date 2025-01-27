import Image from "next/image";
import Slider from "./components/Slider";
import Services from "./components/Services";
import Contact from "./components/Contact";


export default function Home() {
  return (
   <main>
  
    <Slider/>
    <Services/>
    <Contact/>
   </main>
  );
}
