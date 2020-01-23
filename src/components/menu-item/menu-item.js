import * as React from 'react';
import './menu-item.scss'
import {withRouter} from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, linkUrl, match, history}) => {
    return (
        <div
            className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem)