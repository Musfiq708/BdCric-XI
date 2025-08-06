import { useState } from "react"
import Banner from "./Components/Banner/Banner"
import Navigation from "./Components/Nav/Navigation"
import Players from "./Components/Players/Players";
import { ToastContainer, toast } from 'react-toastify';


function App() {
  // const [count, setCount] = useState(0)
  const [bannerbtn, setBannerBtn] = useState(0);

  const freeCreditBtn = () => {
    setBannerBtn(bannerbtn + 1000);
    toast.success('Credit Added to your Account', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
