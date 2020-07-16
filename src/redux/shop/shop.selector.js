import {createSelector} from 'reselect'


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParams =>
    createSelector(
        [selectCollections],
        //collections => collections[collectionUrlParams]
        collections => (collections ? collections[collectionUrlParams] : null)
    )

