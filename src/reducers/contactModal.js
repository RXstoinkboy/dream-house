import {TOGGLE_CONTACT_MODAL} from '../actions/types'

export const contactModal = (state=false, action) => {
    switch (action.type){
        case TOGGLE_CONTACT_MODAL:
            return !state;
        default:
            return state
    }
}