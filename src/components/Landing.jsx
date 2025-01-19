const Landing = () => {
  return (
    <div className="relative w-full h-[200vh]">
      <div className="w-full h-full">
        <img className="w-full h-full object-cover" src="./ok.JPG" alt="" />
      </div>
      <div className="top-0 absolute max-w-screen-2xl mx-auto">
        <div className="font-title mx-28 mt-144 text-lg shadow-2xl">
          <p className="text-white">craft strategies that combine visual identity, messaging, </p>
          <p className="text-white">online presence to build recognition, trust,</p>
          <p className="text-white">analyze market trends,audience research,</p>
        </div>
        <div className="mx-28 mt-14 font-title font-bold text-[6rem] pl-2 pt-4 tracking-tighter leading-none text-white">
          <h1 className="mb-0">DIGITAL</h1>
          <h1 className="mb-0">MARKETING</h1>
          <h1 className="mb-0">EXPERTS</h1>
        </div>
      </div>
    </div>
  )
}

export default Landing
