import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import { Home } from './dyn-load';
import { Users } from './dyn-load';
import { MainMenu } from './dyn-load';

class Main extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <div className='content'>
                    <MainMenu />
                    <div className='pages'>
                        <Route exact path='/' component={ Home } />
                        <Route path='/users' component={ Users } />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;