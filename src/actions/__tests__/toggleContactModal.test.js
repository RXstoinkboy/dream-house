import React from 'react'
import configureSore from 'redux-mock-store'
import {toggleContactModal} from '../toggleContactModal'

const mockStore = configureSore();
const store = mockStore();

describe('toogleContactModal action', ()=>{
    beforeEach(()=>{
        store.clearActions()
    })

    it('dispathes correct action',()=>{
        const expectedActions = [{
            type: 'TOGGLE_CONTACT_MODAL'
        }]
        store.dispatch(toggleContactModal());
        expect(store.getActions()).toEqual(expectedActions);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    })
})