import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, img } = personalDetails;
  const h1Ref = useRef();
  const h2Ref = useRef();
  const h3Ref = useRef();
  const imgRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });

    tl.from([h1Ref.current, h2Ref.current, h3Ref.current], {
      opacity: 0,
      y: 50,
      stagger: 0.2,
    })
    .fromTo(imgRef.current, 
      { opacity: 0, scale: 0.8, rotateY: 20 }, 
      { opacity: 1, scale: 1, rotateY: 0 }  // Ensure it fully appears
    , "-=1"); // Overlapping animation timing
  }, []);

  return (
    <main className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-16">
      {/* Text Section */}
      <div className="text-center md:text-left flex flex-col gap-4">
        <h1 ref={h1Ref} className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Hey there! 👋<br />I'm 
        </h1>
        <h1 ref={h2Ref} className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text animate-pulse">
          {name}
        </h1>
        <h2 ref={h3Ref} className="text-3xl md:text-4xl font-semibold text-gray-300 mt-4">
          Crafting Ideas Into Reality, One Line of Code at a Time. 🚀
        </h2>
      </div>

      {/* Image Section */}
      <div className="relative mt-10 md:mt-0">
        <div 
          className="absolute inset-0 rounded-full border-4 border-purple-500 animate-pulse" 
          aria-hidden="true"
        ></div>
        <img
          ref={imgRef}
          className="w-72 md:w-96 rounded-full shadow-2xl opacity-100 transform transition duration-500 hover:scale-110 hover:rotate-3"
          src={img}
          alt={`Profile of ${name}`}
        />
      </div>
    </main>
  );
}

export default Home;
