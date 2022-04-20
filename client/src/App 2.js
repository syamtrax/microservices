import Homepage from './Pages/Homepage.js'
import Lists from './Pages/Lists.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Homepage />} />
          <Route path="/Lists" exact render={() => <Lists />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App