import Homepage from './Pages/Homepage.js'
import Lists from './Pages/Lists.js'
import Cart from "./Pages/Cart"
import Search from './Pages/Search.js'
import Layout from './components/Layout.jsx'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Recommendation from './Pages/Rekomendation.jsx'
import RedirectCheckout from './Pages/RedirectCheckout.jsx'

function App() {
  useEffect(() => {
    document.title = "Let's Shop"
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>

            <Route path="/" exact element={<Homepage />} />
            <Route path="/Lists" exact element={<Lists />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path='/search' exact element={<Search />} />
            <Route path='/recommendation' exact element={<Recommendation />} />
            <Route path='/checkoutsuccess' exact element={<RedirectCheckout />} />
          </Routes></Layout>
      </BrowserRouter>
    </div>
  )
}

export default App