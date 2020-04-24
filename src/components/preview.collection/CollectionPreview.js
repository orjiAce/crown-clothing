import React from 'react';
import './Preview.scss'
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({title, items}) => {

    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    //filter through the items we got as props from the ShopPage, set limit to 4 for each item, destructure and spread the data like so {...otherItemProps}
                    items.filter((item, idx) => idx < 4).map(item => (


                        <CollectionItem key={item.id} item={item}/>

                    ))
                }
            </div>


        </div>
    );

};

export default CollectionPreview;