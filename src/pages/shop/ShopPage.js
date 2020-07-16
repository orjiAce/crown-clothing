import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import CollectionOverview from "../../components/collection.overview/collection.overview";
import CollectionPage from "../collection/collectionPage";
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.uitils";
import {connect} from 'react-redux'
import {updateCollections} from "../../redux/shop/shop.action";
import WithSpinner from "../../components/withspinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {

    state = {
        loading: true,

    }
    unsubscribeFromSnapshot = null

    componentDidMount() {
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap);
            this.setState({loading: false})
        })
    }

    render() {
        const {match} = this.props
        const {loading} = this.state
        return (
            <div className="shop-page">

                {/*this is a nested route example*/}
                <Route exact path={`${match.path}`}
                       render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>

                <Route path={`${match.path}/:collectionId`}
                       render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMaps => dispatch(updateCollections(collectionsMaps))
})
export default connect(null, mapDispatchToProps)(ShopPage);