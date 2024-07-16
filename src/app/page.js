import About from "./components/About";
import Hero  from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectsSection";
import Email from "./components/EmailSection";
import Top from "./components/Top";
import Footer from "./components/Footer";
export default function Home() {
  return (
  <>
    <Navbar/>
  <main className="flex min-h-screen flex-col px-10 py-20  bg-black">
    <Hero/>
    <About/>
    <ProjectSection/>
    <Email/>
    <Top/>
    <Footer/>
  </main>
  </>
  );
}
