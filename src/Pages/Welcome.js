import React from 'react'
import { Route } from 'react-router-dom'

const Welcome = () => {
  return (
   <section>
     <h2>Welcome page</h2>
     <Route path="/welcome/new-user">
        <h5>WelCome, new user</h5>
     </Route>
   </section>
  )
}

export default Welcome
