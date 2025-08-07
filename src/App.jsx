import { useState } from "react"
import Banner from "./Components/Banner/Banner"
import Navigation from "./Components/Nav/Navigation"
import Players from "./Components/Players/Players";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "./Components/Footer/Footer";


function App() {
  // const [count, setCount] = useState(0)
  const [bannerbtn, setBannerBtn] = useState(0);

  const freeCreditBtn = () => {
    setBannerBtn(bannerbtn + 100000);
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
  const [playerNumber, setPlayerNumber] = useState(0)
  const [selection, setSelection] = useState([])
  const choosePlayerBtn = (cards) => {
    const playerPrice = cards.price
    if (playerPrice > bannerbtn) {
      toast.error(`Not enough Money to Purchase ${cards.name}... Please Add some Credits`, {
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
    else {
      const playerCheck = selection.some(item => item.id == cards.id);
      if (playerCheck) {
        toast.error(`Already Added ${cards.name} To Your Team!!!`, {
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
      else {
        if (selection.length < 6) {
          const newSelection = [...selection, cards]
          setSelection(newSelection);
          setPlayerNumber(selection.length + 1)
          toast.success(`Congratulations..!.! You have Succesfully Added "${cards.name} to Your Dream team."`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",

          });
          setBannerBtn(bannerbtn - playerPrice);
        }
        else {
          toast.error(`Maximum Team Capacity Reached`, {
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
      }
    }
  }
  const teamRemoveBtn = (select, name,price) => {
    const remainingPlayer = selection.filter(selected => selected.id != select);
    setSelection(remainingPlayer);
    setPlayerNumber(selection.length - 1)
    toast.warn(`You Have Removed ${name} From Your Team`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setBannerBtn(bannerbtn + price);
  }




  return (
    <>
      <Navigation bannerbtn={bannerbtn}></Navigation>
      <Banner freeCreditBtn={freeCreditBtn}></Banner>
      <Players
        btnToggle={btnToggle}
        handleBtnToggle={handleBtnToggle}
        choosePlayerBtn={choosePlayerBtn}
        selection={selection}
        teamRemoveBtn={teamRemoveBtn}
        playerNumber={playerNumber}
      ></Players>
      <Footer></Footer>
    </>
  )
}

export default App
