import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'
import Dashbord from './components/Dashbord/Dashbord'
import PhoneBar from './components/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-7xl text-purple-600'>Hello from tailwind</h1>
      <PriceList></PriceList>
      <Dashbord></Dashbord>
      <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
