import ShopActionTypes from "./shop.types";


export const updateCollections = collectionMaps => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionMaps
})