import React from 'react';
import ItemLink from './item-link';
import links from './main-menu.json';

class MainMenu extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="collapse navbar-collapse">
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

export default MainMenu;