import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import About from "@/components/About";
import Explore from "@/components/Explore";
import Feedback from "@/components/Feedback";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import WhatsNew from "@/components/WhatsNew";
import Details from "@/components/Details";

export default function Home() {
  return (
    <div className=" bg-black overflow-hidden text-white ">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <Details/>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <div className="relative">
        <Feedback />
        <div className="gradient-04 z-0" />
        <Insights />
      </div>
      <Footer />
    </div>
  );
}
