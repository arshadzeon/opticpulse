// Import necessary modules
import { useState, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Work = () => {
  const elems = [
    { heading: "Pots and Pans", subheading: "Made personalized market campaigns that tripled their overall performance.", img: "./huh.avif" },
    { heading: "Reno and Pelle", subheading: "Increased their exclusivity in the market.", img: "./yup.avif" },
    { heading: "Aeble Interiors", subheading: "Developed targeted email campaigns based on customer behavior.", img: "./star.avif" },
    { heading: "Sting Operators", subheading: "Designed data-driven social media ad campaigns tailored to specific audience segments.", img: "./girl.avif" },
  ]

  useEffect(() => {
    // Select all elements with the class "card" and apply the animation
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.to(card, {
        y: () => -(card.offsetHeight * 0.5), // Adjust the multiplier for speed
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom", // When the card enters the viewport
          end: "bottom top",   // When the card leaves the viewport
          scrub: true,         // Smooth scrolling effect
        },
      })
    })
  }, [])

  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl py-20 ">
        <div className="flex gap-1 mx-16">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 mx-9">
              <path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-0.063,9H9.151L12,0.122,14.849,9h9.213L16.6,14.453Z" />
            </svg>
          </div>
          <h3 className="text-xl font-title -mx-9">Featured Projects</h3>
        </div>
        <h1 className="text-[13rem] font-title mt-7 mx-24">Work</h1>
        <p className="text-2xl font-title mx-28">
          Highlights the cases that we passionately built<br />with our forward-thinking clients
        </p>
        <div className="elems mt-10 grid grid-cols-2 gap-4m-16">
          {elems.map((item, index) => (
            <div key={index} className="card elem">
              <div className="w-full h-[35vw] px-12">
                <img className="w-full h-full object-cover rounded-lg" src={item.img} alt={item.heading} />
              </div>
              <div className="font-title mx-12 mt-3">
                <h1>{item.heading}</h1>
                <p className="opacity-60 mb-3">{item.subheading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
