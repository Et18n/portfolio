import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Top from '../components/Top';
import Projects from './Projects';


import './page.css'
export default function Product() {
  return (
    <>
    <Navbar/>
    <Projects/>
    <Top/>
    <div className=' px-20 pb-20'><Footer/></div>
    
    </>
  );
}
