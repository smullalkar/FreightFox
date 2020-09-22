import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Home from "../Components/Home/Home"

const Routes = () => {
    return (
        <div>
            <div>
                <Link to='/'>HOME</Link>
            </div>
            <div>
                <Link to='/other'>OTHER ROUTES</Link>
            </div>
            <Switch>
                <Route path="/" exact render={() => <Home />} />
            </Switch>
        </div>
    )
}

export default Routes