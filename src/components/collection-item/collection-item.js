import * as React from 'react';
import './collection-item.styles.scss'

function CollectionItem({id, title, name, price, imageUrl}) {
    return (
        <div className="collection-item">
            <div className="image"
                 style={{backgroundImage: `url(${imageUrl})`}}/>


            <div className="collection-footer">
<span className="price">
    {price}
</span>
                <span className="name">
                    {name}
                </span>
            </div>
        </div>
    );
}

export default CollectionItem