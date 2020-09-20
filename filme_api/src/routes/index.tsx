import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Filmes from '../pages/filmes'

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route patch='/filmes/1' component={Filmes} />
    </Switch>
)

export default Routes;
