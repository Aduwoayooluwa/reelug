import { useEffect, useRef } from "react";
import { Avatar } from "antd";
import { motion } from "framer-motion";
import { testimonials } from "../../helper/testimonials";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (section && container) {
     
      const totalWidth = container.scrollWidth;
      const viewportWidth = section.offsetWidth;

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${totalWidth}`, 
        scrub: 1, 
        pin: section,
        anticipatePin: 1,
        onEnter: () => gsap.to(container, { x: 0 }), 
        onLeaveBack: () => gsap.to(container, { x: 0 }), 
        invalidateOnRefresh: true, 
      });

    
      gsap.to(container, {
        x: () => -(totalWidth - viewportWidth), 
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top", 
          end: () => `+=${totalWidth - viewportWidth}`, 
          scrub: 1, 
        },
      });

      gsap.set(section, { padding: "40px 20px" });
    
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      className="w-full  px-6 md:px-28 bg-green-100 py-10 md:py-28 lg:py-40 h-screen relative overflow-hidden"
    >

    <h1 className=" w-full md:w-[70%] 2xl:w-[60%] text-2xl md:text3xl leading-normal md:leading-tight text-start lg:text-[64px] font-[600]">What users have to say about us</h1>
      <div
        ref={containerRef}
        className="flex w-full h-full justify-center items-center space-x-8 px-8 overflow-visible"
      >
        <div className="flex-none w-[30vw] md:w-[13vw] h-[400px] lg:w-[5vw]"></div>
        {testimonials.map((data, index) => (
          <motion.div
            key={data.name}
            className="flex-none relative grid place-items-center  w-[90vw] md:w-[40vw] lg:w-[30vw] h-[400px] bg-white p-6 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex absolute left-10 top-8 items-center mb-4">
              <img
                src={data.companyLogo}
                alt={data.company}
                className="w-12 h-12 object-cover mr-3"
              />
              <h3 className="font-semibold text-lg">{data.company}</h3>
            </div>
            <p className="mb-4 text-gray-700">{data.message}</p>

            <div className="flex bottom-10 left-8 absolute items-center space-x-3">
              <Avatar size={64} />
              <div>
                <p className="font-semibold text-xl">{data.name}</p>
                <p className="text-gray-500">{data.jobTitle}</p>
              </div>
            </div>
          </motion.div>
        ))}

<div className="flex-none w-[30vw] md:w-[13vw] h-[400px] lg:w-[5vw]"></div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
