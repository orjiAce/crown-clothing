import * as React from 'react';
import './collection-item.styles.scss'
import CustomButton from "../customer-button/custom-btn";
import {connect} from 'react-redux'
import {addItemsCart} from "../../redux/cart/cart.action";


function CollectionItem({item, addItemsCart}) {

    const {name, price, imageUrl} = item;
    return (
        <div className="collection-item">
            <div className="image"
                 style={{backgroundImage: `url(${imageUrl})`}}/>


            <div className="collection-footer">

                <span className="name">
                    {name}
                </span>
                <span className="price">
    {price}
</span>

            </div>
            {/*so this button calls the addItemToCart function and adds the item into the CartItem*/}
            <CustomButton onClick={() => addItemsCart(item)}>ADD TO CART</CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItemsCart: item => dispatch(addItemsCart(item))
});


export default connect(null, mapDispatchToProps)(CollectionItem)