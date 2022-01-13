import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Pipeline from '../pages/Pipeline'
import Users from '../pages/Users'


const Routes = () => {
    return (
        <Switch>           
            <Route path='/pipeline' component={Pipeline } />  
            <Route path='/users' component={Users } />  
            
        </Switch>
    )
}

export default Routes