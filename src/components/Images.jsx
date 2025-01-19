const Images = () => {
    return (
      <div className="relative">
        {/* H1 positioned on top without affecting layout */}
        <div className="absolute top-56 left-0 z-10 p-4">
          <h1 className="text-7xl font-thin text-white">
          WE <br /> DO<br />CREATIVE <br /> STUFF
          </h1>
        </div>
  
        <div className="w-full h-screen flex items-center justify-center bg-black">
          <div className="w-[40%] h-3/4 relative">
            <div className="w-56 h-60 bg-red-700 -right-16 top-6 absolute">
              <img
                src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
                alt=""
              />
            </div>
            <div className="w-56 bg-red-700 -left-16 top-6 absolute">
              <video autoPlay loop muted src="./news-rino-pelle.mp4"></video>
            </div>
            <div className="w-56 bg-red-700 top-96 -left-16 absolute">
              <video autoPlay loop muted src="./fooot.mp4"></video>
            </div>
            <div className="w-56 h-60 bg-red-700 top-96 -right-20 absolute">
              <img
                className="w-full h-full object-cover"
                src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
                alt=""
              />
            </div>
            <img
              className="w-full h-full object-cover"
              src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Images;
  