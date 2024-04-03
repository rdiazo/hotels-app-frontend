import { useEffect, useState } from "react"
import { getHotelsThunk } from "../store/states/hotels.state"
import { useDispatch, useSelector } from "react-redux"
import ListHotels from "../components/HomePage/ListHotels"
import '../components/HomePage/styles/HomePage.css'
import FilterName from "../components/HomePage/FilterName"
import FilterPrice from "../components/HomePage/FilterPrice"
import FilterCities from "../components/HomePage/FilterCities"

const HomePage = () => {

  const [nameInput, setNameInput] = useState('')
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })

  const hotels = useSelector(states => states.hotels)

  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'https://hotels-app-backend.onrender.com/hotels'
    dispatch(getHotelsThunk(url))
  }, [])


  const hotelsFiltered = hotels?.filter(hotelInfo => {
    //Filter name
    const filterName = hotelInfo.name.toLowerCase().includes(nameInput)
    //Filter price
    const priceHotel = +hotelInfo.price
    const filterPrice = fromTo.from <= priceHotel && priceHotel <= fromTo.to

    return filterName && filterPrice
  }) 

 


  return (
    <>
      <section className="Home__Search">

        <FilterName setNameInput={setNameInput} />
        

      </section>

      <div className="Home__Container">
        <aside className="Home__Container_Filters">
         
          <FilterPrice setFromTo={setFromTo} />
          <FilterCities />
        </aside>

        <section className="Home__Container__Hotelcards">
          <div className="card-container">
            <ListHotels hotels={hotelsFiltered} />
          </div>
        </section>
      </div>

    </>
  )

}

export default HomePage