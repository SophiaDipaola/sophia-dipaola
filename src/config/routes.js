import Home from '../components/Home'
import Selene from '../components/Selene'
import Lavender from '../components/Lavender'
import Farmony from '../components/Farmony'
import Mindwholeness from '../components/Mindwholeness'
import Projects from '../components/Projects'
import About from '../components/About'

import { Switch, Route } from 'react-router-dom'

export default (
    <Switch>
    <Route exact path='/' component={ Home } />
    <Route exact path='/selene' component={ Selene } />
    <Route exact path='/lavender' component={ Lavender } />
    <Route exact path='/farmony' component={ Farmony } />
    <Route exact path='/mindwholeness' component={ Mindwholeness } />
    <Route exact path='/projects' component={ Projects } />
    <Route exact path='/about' component={ About } />
    </Switch>
)
