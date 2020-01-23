import React, {Component} from 'react';
import SHOP_DATA from "./shopData";
import CollectionPreview from "../../components/preview.collection/CollectionPreview";

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    //map data gotten from SHOP_DATA
                    //use the id ad key and spread the rest as {...otherCollectionProps} and supply it to our collectionPreview as props
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }

            </div>
        );
    }
}

export default ShopPage;