import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Playvid = () => {
  const boss = useRef(null);
  const videodiv = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(videodiv.current, {
      width: "100vw",
      height: "100vh",
      ease: "none",
      scrollTrigger: {
        trigger: boss.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        // markers: true, // Uncomment for debugging
      },
    });
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <div ref={boss} className="w-full h-full bg-black py-28 flex flex-col justify-between relative">
        {/* Header */}
        <div className="w-full flex items-center justify-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 text-white"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" />
          </svg>
          <h1 className="text-lg font-title text-white">Work in motion</h1>
        </div>

        {/* Video Section */}
        <div className="relative flex justify-center items-center">
          <div ref={videodiv} className="w-96 aspect-video bg-red-400">
            <video 
              src="./yo.mp4"
              className="w-full h-full scale-[1.2]"
              autoPlay
              loop
              muted
            ></video>
          </div>
          <h1 className="absolute inset-0 flex justify-center items-center text-white text-9xl font-title gap-96">
            <div>Play</div>
            <div>Reel</div>
          </h1>
        </div>

        {/* Footer */}
        <p className="text-white text-center font-title">
          Our work is best experienced in motion, Don’t forget to put on your headphones.
        </p>
      </div>
    </div>
  );
};

export default Playvid;