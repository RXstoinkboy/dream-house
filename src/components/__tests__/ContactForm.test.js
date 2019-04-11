import React from 'react'
import {shallow, mount} from 'enzyme'
import configureStore from 'redux-mock-store'

import ContactForm from '../ContactForm'
import ContactModal from '../ContactModal'
import {toggleContactModal} from '../../actions/toggleContactModal'

const mockStore = configureStore();
const store = mockStore();

describe('Contact components', ()=>{
    it('<ContactModal /> renders correctly', ()=>{
        shallow(<ContactModal store={store}/>)
    })

    it('<ContactForm /> renders correctly', ()=>{
        shallow(<ContactForm store={store}/>)
    })

})

describe('ContactModal',()=>{
    const link = mount(
        <ContactForm 
            store={store}
        />
    );
    const modal = mount(<ContactModal store={store}/>);
    
    const expectedActions = [
        {
            'type': 'TOGGLE_CONTACT_MODAL'
        }
    ]

    afterAll(()=>{
        link.unmount()
    })

    it('is visible after clicking on ContactForm link', ()=>{

        expect(modal.find('#modal').hasClass('modal')).toBeFalsy();
        expect(modal.find('#shade').hasClass('shade')).toBeFalsy();
        
        link.simulate('click');
        
        expect(store.getActions()).toEqual(expectedActions);
        
        if(store.getActions() === expectedActions){
            expect(modal.find('#modal').hasClass('modal')).toBeTruthy();
            expect(modal.find('#shade').hasClass('shade')).toBeTruthy();
        }
        
    })

    it('is invisible after clicking on overlay element',()=>{
        const shade = modal.find('#shade');
        shade.simulate('click');
        
        if(store.getActions() === expectedActions){
            expect(modal.find('#modal').hasClass('modal')).toBeFalsy();
            expect(modal.find('#shade').hasClass('shade')).toBeFalsy();
        }
    })
})