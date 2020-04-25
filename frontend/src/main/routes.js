
import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Wedo from '../wedo/wedo'
import About from '../about/about'
import Cards from '../cards/cards'
import PageCard from '../cards/CardPage'


export default props => (

    <BrowserRouter>
        <Switch>
            <Route path='/cards' component={Cards}></Route>
            <Route path='/wedos' component={Wedo}></Route>
            <Route path='/about' component={About}></Route>
            <Route
                path='/pagecard' render={(props) => <PageCard {...props} 
                
                name={props.history.location.state.name} 
                id={props.history.location.state.id} 
                
                />}
            />

        </Switch>
    </BrowserRouter>
   
)