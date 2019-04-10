import React from 'react';
import styles from './styles/Contacts.module.css'

import { connect } from 'react-redux'
import {toggleContactModal} from '../actions/toggleContactModal'

const ContactForm = props => {
        return (
            <div 
                className={styles.clickable}
                onClick={props.toggleContactModal}
            >
                send message
            </div>
        );
};

const mapDispatchToProps = {
    toggleContactModal
}

export default connect(null, mapDispatchToProps)(ContactForm);