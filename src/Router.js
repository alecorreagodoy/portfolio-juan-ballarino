import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

 import Body from './components/Body';
 import Aboutme from './components/aboutme';
 import Works from './components/Works';

 const Router = ()=>(

    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Body}/>
            <Route exact path='/aboutme' component={Aboutme}/>
            <Route exact path='/works' component={Works}/>
                
          

        </Switch>
    </BrowserRouter>
)

export default Router;