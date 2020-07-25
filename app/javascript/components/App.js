import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Airlines from './Airlines'
import Airline from './Airline'

const App = () => {
  return (
    <Fragment>
      <div className="h-40 min-h-full text-center py-10 bg-gray-500">
        <h1 className="text-6xl">Open Flights</h1>
      </div>
      
      <Switch>
        <Route exact path="/" component={Airlines} />
        <Route exact path="/airlines/:slug" component={Airline} />
      </Switch>
    </Fragment>
  )
}

export default App
