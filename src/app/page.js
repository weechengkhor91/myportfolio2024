
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import About from "./components/about";
import Project from "./components/project";
// import Email from "./components/email";
import Footer from "./components/footer";
import Contact from "./components/contact";


export default function Home() {
  return (
   <main className="flex min-h-screen flex-col ">
    <Navbar/>
    <div className="container mx-auto mt-4">
      <Banner/>
      <About/>
      <Project/>
      {/* <Email/> */}
      <Contact/>
      <Footer/>
    </div>
   </main>
  );
}
