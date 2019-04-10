import {combineReducers} from 'redux'

import {exampleReducer} from './exampleReducer'
import {contactModal} from './contactModal'

export default combineReducers({
    exampleReducer,
    contactModal,
})