import React, {Component} from 'react';
import {Route} from 'react-router-dom'

import CollectionPage from "../collection/collectionPage";
import {connect} from 'react-redux'
import {fetchCollectionStart} from "../../redux/shop/shop.action";
import {createStructuredSelector} from "reselect";

import CollectionOverviewContainer from "../../components/collection.overview/collection-overview.container";
import CollectionPageContainer from "../collection/oollection.container";


class ShopPage extends Component {


    componentDidMount() {
        const {fetchCollectionStart} = this.props;
        fetchCollectionStart();

    }

    render() {
        const {match} = this.props

        return (
            <div className="shop-page">

                {/*this is a nested route example*/}
                <Route exact path={`${match.path}`}
                       component={CollectionOverviewContainer}/>

                <Route path={`${match.path}/:collectionId`}
                       component={CollectionPageContainer}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})
export default connect(null, mapDispatchToProps)(ShopPage);