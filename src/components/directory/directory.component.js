import React, {Component} from 'react';
import './directory.scss'
import MenuItem from "../menu-item/menu-item";
import {connect} from 'react-redux'
import {selectDirectorySections} from "../../redux/directory/directory.selector";
import {createStructuredSelector} from "reselect";
//this is a function component because we need to pass and use state for our menu component


const DirectoryComponent = ({sections}) => (


    <div className="directory-menu">
        {
            //instead of writing like this section.id we are gonna destructure the values like this ({id, title})
            //OR call the id vallue and spread the rest like so ...otherValues
            sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id}  {...otherSectionProps}/>
            ))
        }
    </div>

);

const MapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(MapStateToProps)(DirectoryComponent);