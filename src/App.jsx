import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Work from "./components/Work"
import Playvid from "./components/Playvid"
import Images from "./components/Images"
import Spread from "./components/Spread"
import LocomotiveScroll from 'locomotive-scroll'
const App = () => {
 

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full ">
      <Navbar/>
      <Landing/>
      <Work/>
      <Playvid/>
      <Images/>
      <Spread/>
    </div>
  )
}

export default App
