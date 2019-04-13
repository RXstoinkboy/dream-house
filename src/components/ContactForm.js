import React from 'react';
import styles from './styles/Contacts.module.scss'

import { connect } from 'react-redux'
import {toggleContactModal} from '../actions/toggleContactModal'

import PropTypes from 'prop-types'

export const ContactForm = props => {
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

ContactForm.propTypes = {
    toggleContactModal: PropTypes.func.isRequired
}