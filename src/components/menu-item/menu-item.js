import * as React from 'react';
import './menu-item.scss'

const MenuItem = ({title, imageUrl, size}) => {
    return (
        <div
            className={`${size} menu-item`}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />

            <div className="content">
                <h1 className="title">
                    {title}
                </h1>
                <span>
            SHOP NOW
        </span>
            </div>

        </div>
    );
};

export default MenuItem