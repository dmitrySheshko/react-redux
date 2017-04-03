import React from 'react';
import ItemLink from './item-link';

import links from './users-menu.json';

class UsersMenu extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-default pull-left users-menu">
                <div className='collapse navbar-collapse'>
                    <ul className="nav navbar-nav">
                        {
                            links.map((link) => {
                                return <ItemLink key={ link.id } data={ link } />
                            })
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}

export default UsersMenu;