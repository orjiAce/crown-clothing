import {compose} from "redux";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching} from "../../redux/shop/shop.selector";
import WithSpinner from "../withspinner/with-spinner.component";
import CollectionOverview from "./collection.overview";


const mapStateToProps = createStructuredSelector({
        isLoading: selectIsCollectionFetching
    }
)

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner)(CollectionOverview)

export default CollectionOverviewContainer