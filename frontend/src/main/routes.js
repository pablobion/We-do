
import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Wedo from '../wedo/wedo'
import About from '../about/about'
import Cards from '../cards/cards'
import CardPage from '../cards/CardPage/CardPage.jsx'
import CreateCard from '../cards/CreateCard/CreateCard'


export default props => (

    <BrowserRouter>
        <Switch>
            <Route path='/cards' component={Cards}></Route>
            <Route path='/wedos' component={Wedo}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/createcard' component={CreateCard}></Route>
            <Route
                path='/cardpage' render={(props) => <CardPage {...props} 
                name={props.history.location.state.name} 
                id={props.history.location.state.id}    
                />}
            />
        </Switch>
    </BrowserRouter>
   
)