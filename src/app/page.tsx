 
import Navbar from "./Componets/Navbar/Navbar"
import Hero from "./Componets/Hero/Hero"
import Card from "./Componets/Cards/Cards"
import Footer from "./Componets/Footer/Footer"
import EnquiryForm from "./Componets/EnquiryForm/EnquiryForm"
import ServiceCenterCard from "./Componets/ServiceCenterCard/ServiceCenterCard"
import WhyWeAreBest from "./Componets/WhyWeAreBest/WhyWeAreBest"
import FloatingContactButtons from "./Componets/FloatingContactButtons/FloatingContactButtons"
import ScrollToTopButton from "./Componets/ScrollToTopButton/ScrollToTopButton"
 
export default function Home() {
  return (
   <>
   
     

     
   <Navbar/>
   
   <Hero/>
   <FloatingContactButtons/>
   
   <EnquiryForm/>
   <ScrollToTopButton/>
   <ServiceCenterCard/>
  
   <Card/>
   <WhyWeAreBest/>
   <Footer/>
   </>
  );
}
