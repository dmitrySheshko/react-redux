import React from 'react';

export function DynLoad(callback) {

    return class DynLoadComponent extends React.Component {
        static Component = null;

        state = {
            Component: DynLoadComponent.Component
        }

        componentWillMount(){
            callback((component) => {
                const Component = component.default;
                DynLoadComponent.Component = Component;
                this.setState({Component: Component});
            });
        }

        render(){
            const { Component } = this.state;
            return (Component) ? (<Component { ...this.props } />) : (<div>Loading...</div>);
        }
    }
}

export const Home = DynLoad(require('bundle-loader!../home/home'));
export const Users = DynLoad(require('bundle-loader!../users/users-route'));
export const MainMenu = DynLoad(require('bundle-loader!../../modules/menu/main-menu'));