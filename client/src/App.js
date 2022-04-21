import Homepage from './Pages/Homepage.js'
import Lists from './Pages/Lists.js'
import Cart from "./Pages/Cart"
import Search from './Pages/Search.js'
import Layout from './components/Layout.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
        <Routes>
          
          <Route path="/" exact element={<Homepage/>} />
          <Route path="/Lists" exact element={<Lists />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path='/search' exact element={<Search />} />
          
        </Routes></Layout>
      </BrowserRouter>
    </div>
  )
}

export default App