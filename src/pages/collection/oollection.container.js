import {compose} from "redux";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionLoaded} from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/withspinner/with-spinner.component";
import CollectionPage from "./collectionPage";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer
