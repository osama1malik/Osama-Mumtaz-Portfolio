import { BrowserRouter } from "react-router-dom";

import { About, Contact, Education, Experience, Feedbacks, Hero, Navbar, Tech, Works } from "./components";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />

        <main className="relative">
          <About />
          <Experience />
          <Education />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
        </main>

        <Footer />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
};

export default App;
