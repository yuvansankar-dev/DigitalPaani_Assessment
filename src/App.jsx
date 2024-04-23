import { useRef, useState } from 'react'
import './App.css'
import { indianCitiesWeather } from './Data'
import Card from "./Component/Card/Card"

function App() {
  const [data, setData] = useState(indianCitiesWeather)
  const [searchText, setSearchText] = useState("")
  const timeoutId=useRef()
  const searchOnchange = (event) => {
      clearTimeout(timeoutId.current)
      setSearchText(event.target.value)
      timeoutId.current = setTimeout(() => {
        console.log("filter works")
        const showData = indianCitiesWeather.filter((cityData) => cityData.name.includes(event.target.value))
        setData(showData)
      }, 700)
  }
  return (
    <div className='container'>
      <div className='Header'>
        <label htmlFor='search'>Search by city name</label><input placeholder='search..' value={searchText} onChange={searchOnchange} />
      </div>
      <div className='list'>
        {data.map((cityData) => <Card cityData={cityData}key={cityData.name}/>)}
      </div>
    </div>
  )
}

export default App
