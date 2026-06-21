import { BrowserRouter } from "react-router-dom";

import { About, Contact, Education, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />

          <StarsCanvas />
          <Footer/>
        </div>
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
}

export default App;
