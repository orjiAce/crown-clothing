import React from 'react';
import {Route} from 'react-router-dom'
import CollectionOverview from "../../components/collection.overview/collection.overview";
import CollectionPage from "../collection/collectionPage";

const ShopPage = ({match}) => (


    <div className="shop-page">

        {/*this is a nested route example*/}
        <Route exact path={`${match.path}`} component={CollectionOverview}/>

        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
);


export default (ShopPage);