import React from 'react';
import styles from './styles/Modal.module.css';

import {connect} from 'react-redux'
import {toggleContactModal} from '../actions/toggleContactModal'

const ContactModal = props => {
    return (
        <>
            <div className={styles.modal}>
                hello from modal
            </div>
            <div className={styles.shade} onClick={props.toggleContactModal} />
        </>
    );
};

const mapDispatchToProps = {
    toggleContactModal
}

export default connect(null, mapDispatchToProps)(ContactModal);