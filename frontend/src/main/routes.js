
import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Wedo from '../wedo/wedo'
import About from '../about/about'


export default props => (

    <BrowserRouter>
        <Switch>
            <Route path='/cards' component={Wedo}></Route>
            <Route path='/wedos' component={Wedo}></Route>
            <Route path='/about' component={About}></Route>
        </Switch>
    </BrowserRouter>
   
)