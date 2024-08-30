// import React, { useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
// import Home from "../Home/Home";

// // Capitalize the component name

// function ScrollToTopButton() {
//   const [showButton, setShowButton] = useState(false);

 
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowButton(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (<>
//     {showButton && (
//       <span
//         onClick={scrollToTop}
//         className="toTop fixed bottom-4 right-4 z-50 main-bg w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
//         title="Back to top"
//       >
//         <i className="fas fa-arrow-up text-white text-xl"></i>
//       </span>
//     )}
//     </>
//   );
// }

// export default function Layout() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-grow">
//         <Home />
//       </main>
//       <Footer />
//       <ScrollToTopButton />
//     </div>
//   );
// }





import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Services from '../NavServices/services';
import Contact from '../Contact/Contact';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (<>
    {showButton && (
      <span
        onClick={scrollToTop}
        className="toTop fixed bottom-4 right-4 z-50 main-bg w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
        title="Back to top"
      >
        <i className="fas fa-arrow-up text-white text-xl"></i>
      </span>
    )}
    </>
  );
}
export default function Layout() {
 
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);


  return (
    <div className="flex flex-col min-h-screen">
      <header>
<Navbar/>      </header>
      <main className="flex-grow">
        <Home id="home" />
        <About id="about" />
        <Services id="services" />
        <Contact id="contact" />
      </main>
      <footer>
        <Footer/>
       <ScrollToTopButton />

      </footer>
    </div>
  );
}
