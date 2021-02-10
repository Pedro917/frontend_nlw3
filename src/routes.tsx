import React from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Landing from './views/Landing';
import Mapping from './views/mapping';
import CreateOrphanage from './views/CreateOrphanage';
import Orphanage from './views/Orphanage';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}></Route>
                <Route path="/app" component={Mapping}></Route> 
                <Route path="/orphanages/create" component={CreateOrphanage}></Route> 
                <Route path="/orphanages/:id" component={Orphanage}></Route> 
            </Switch>
        </BrowserRouter>

        

    );
}

export default Routes;