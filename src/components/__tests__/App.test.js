import React from 'react';
import {shallow, mount} from 'enzyme'
import {MemoryRouter} from 'react-router'

// components
import App from '../App'
import Header from '../Header'
import Navigation from '../Navigation'
import Home from '../Home'
import Footer from '../Footer'

describe('App component', ()=>{
    it('renders correctly', ()=>{
        shallow(<App />)
    })

    it('shows correct components when pathname="/"', ()=>{
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );
        
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Navigation)).toHaveLength(1);
        expect(wrapper.find(Home)).toHaveLength(1);
        expect(wrapper.find(Footer)).toHaveLength(1);
    
    })
})