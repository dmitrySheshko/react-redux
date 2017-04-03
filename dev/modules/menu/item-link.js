import React from 'react';
import { NavLink } from 'react-router-dom';

class ItemLink extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <li>
                <NavLink to={ this.props.data.url }>{ this.props.data.title }</NavLink>
            </li>
        );
    }
}

export default ItemLink;