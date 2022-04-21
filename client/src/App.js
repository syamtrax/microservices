import Homepage from './Pages/Homepage.js'
import Lists from './Pages/Lists.js'
import Cart from "./Pages/Cart"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepage/>} />
          <Route path="/Lists" exact element={<Lists />} />
          <Route path="/cart" exact element = {<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App