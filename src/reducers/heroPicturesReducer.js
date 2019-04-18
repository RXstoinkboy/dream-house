import {
    LOADING_HERO_PICTURES,
    LOADED_HERO_PICTURES
} from '../actions/types'

const initialState = {
    loading: false,
    data: []
}

export const heroPicturesReducer = (state = initialState, action) => {
    switch(action.type){
        case LOADING_HERO_PICTURES:
            return {
                ...state,
                loading: true
            };
        case LOADED_HERO_PICTURES:
            return {
                ...state,
                loading: false,
                data: [...state.data, action.image]
            }
        default:
            return state;
    }
}