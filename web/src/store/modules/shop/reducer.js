import produce from 'immer';
import types from './types'

const INITIAL_STATE = {
    costumer: {},
    shops: [],
    shop: {},
    shopMapSelected: null,
    mapCenter: {
        lat: -22.697085299999998,
        lng: -46.7562844,
    },
    cart:[],
}

function shop (state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.SET_CUSTUMER : {
            return produce(state, (draft) => {
                draft.costumer = action.costumer;
            })
        }

        case types.SET_SHOPS : {
            return produce(state, (draft) => {
                draft.shops = action.shops;
            })
        }

        case types.SET_SHOP_MAP_SELECTED: {
            return produce(state, (draft) => {
                draft.shopMapSelected = action.shop;
            })
        }

        case types.SET_MAP_CENTER: {
            return produce(state, (draft) => {
                draft.mapCenter = action.location;
            })
        }

        case types.SET_SHOP: {
            return produce(state, (draft) => {
                draft.shop = action.shop;
            })
        }

        case types.TOGGLE_CART_PRODUCT: {
            return produce(state, (draft) => {
                const index = draft.cart.findIndex((p) => p._id == action.product._id);
                if(index != -1){
                    draft.cart.splice(index, 1)
                }else{
                    draft.cart.push(action.product);
                }
            })
        }

        default: 
            return state;
    }
} 

export default shop;