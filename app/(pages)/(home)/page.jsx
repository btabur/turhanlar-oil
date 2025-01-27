import Image from "next/image";
import Slider from "../../components/Slider";
import Services from "../../components/Services";
import Contact from "../../components/Contact";
import { services } from "@/app/utilis/Cards";


export default function Home() {
  return (
   <main>
  
    <Slider/>
    <Services cards={services}/>
    <Contact/>
   </main>
  );
}
