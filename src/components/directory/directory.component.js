import React, {Component} from 'react';
import './directory.scss'
import MenuItem from "../menu-item/menu-item";

//this is a class component because we need to pass and use state for our menu component


class DirectoryComponent extends Component {
    constructor() {
        super();
        this.state = {
            //an array of menu values
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.unsplash.com/photo-1498661367879-c2085689eed4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.unsplash.com/photo-1505632958218-4f23394784a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]

        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    //instead of writing like this section.id we are gonna destructure the values like this ({id, title})
                    //OR call the id vallue and spread the rest like so ...otherValues
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id}  {...otherSectionProps}/>
                    ))
                }
            </div>
        );
    };
}
export default DirectoryComponent