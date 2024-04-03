import { useRef } from "react"
import './styles/HomePage.css'


const FilterName = ({ setNameInput }) => {

const inputSearch = useRef()

const handleSubmit = e => {
  e.preventDefault()
  setNameInput(inputSearch.current.value.trim().toLowerCase())
  inputSearch.current.value = ''
}

  return (
    <form onSubmit={handleSubmit}>
      <input className='Home__input__search'  ref={inputSearch} type="text" />
      <button className="Home__button__search">Search</button>
    </form>
  )
}

export default FilterName