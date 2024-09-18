import Home from ".";
import Benefits from "./benefits";
import { CTA } from "./cta";
import { Features } from "./features";
import Footer from "./footer";
import Testimonials from "./testimonials";

export function HomePage() {
  return (
    <div>
      <Home />
      <div className="min-h-screen w-full grid place-items-center">
        <Benefits />
      </div>
      <Features />    
      {/* <div className="h-screen w-full">

      </div> */}

      <Testimonials />
      <CTA />

      <footer className="w-full hidden md:block h-[600px]">
      <Footer />
      </footer>
    </div>
  );
}
