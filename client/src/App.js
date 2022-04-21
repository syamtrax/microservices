import Homepage from './Pages/Homepage.js'
import Lists from './Pages/Lists.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepage/>} />
          <Route path="/Lists" exact element={<Lists />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App