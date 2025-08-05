import { useState } from "react"
import Banner from "./Components/Banner/Banner"
import Navigation from "./Components/Nav/Navigation"
import Players from "./Components/Players/Players";
import Available from "./Components/Available/Available";


function App() {
  // const [count, setCount] = useState(0)
  const [bannerbtn, setBannerBtn] = useState(0);

  const freeCreditBtn = () => {
    setBannerBtn(bannerbtn + 1000);
    console.log(bannerbtn)
  }

  const [btnToggle, SetBtnToggle] = useState({
    available: true,
    statuso: "available"
  })

  const handleBtnToggle = (statuso) => {
    
    if (statuso == "available") {
      SetBtnToggle({
        available: true,
        statuso: "available"
      })
    }
    else {
      SetBtnToggle({
        available: false,
        statuso: "selected"
      })
    }
  }

  return (
    <>
      <Navigation bannerbtn={bannerbtn}></Navigation>
      <Banner freeCreditBtn={freeCreditBtn}></Banner>
      <Players
      btnToggle={btnToggle}
      handleBtnToggle={handleBtnToggle}
      ></Players>
    </>
  )
}

export default App
