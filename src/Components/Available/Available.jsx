import { useEffect, useState } from "react"
import Cards from "../Cards/Cards";

export default function Available({choosePlayerBtn}) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('fake.json')
      .then(res => res.json())
      .then(data => setCards(data.players))
  }, [])
 
  return (
    <div className=" grid grid-cols-3 gap-6 justify-between mb-[380px]">
      {
        cards.map(cards =>
          <Cards
            key={cards.id}
            cards={cards}
            choosePlayerBtn={choosePlayerBtn}
          >
          </Cards>
        )
      }

    </div>
  )
}

