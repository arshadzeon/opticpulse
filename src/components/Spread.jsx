import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Spread = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <div className="w-full h-screen bg-black relative font-title">
      <div
        ref={textRef}
        className="flex flex-col items-center justify-center py-56 text-9xl text-center text-white"
      >
        <h1>
          spread <br />
          the news
        </h1>
      </div>
      <p className="text-center -mt-36 text-lg text-white">
        join us on this journey and build your online presence <br />
        with our revolutionary marketing strategies
      </p>
    </div>
  );
};

export default Spread;
