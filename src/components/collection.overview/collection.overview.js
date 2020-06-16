import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import './collections-overview.styles.scss'
import CollectionPreview from "../preview.collection/CollectionPreview";
import {selectCollectionPreview} from "../../redux/shop/shop.selector";

//this component serves as nested route for our shop page
const CollectionOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
            {
                //map data gotten from SHOP_DATA
                //use the id ad key and spread the rest as {...otherCollectionProps} and supply it to our collectionPreview as props
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionPreview
});
export default connect(mapStateToProps)(CollectionOverview);