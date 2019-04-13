import React from 'react';
import styles from './styles/Modal.module.scss';

import {connect} from 'react-redux'
import {toggleContactModal} from '../actions/toggleContactModal'

import PropTypes from 'prop-types'

export const ContactModal = props => {
    return (
        <>
            <div 
                id='modal' 
                className={props.contactModal ? styles.modal : styles.invisibleModal}
            >
                hello from modal
            </div>
            <div 
                id='shade' 
                className={props.contactModal ? styles.shade : styles.invisibleShade} 
                onClick={props.toggleContactModal}
                onKeyDown={props.toggleContactModal}
            />
        </>
    );
};

const mapStateToProps =state=> {
    return {
        contactModal: state.contactModal
    }
}

const mapDispatchToProps = {
    toggleContactModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactModal);

ContactModal.propTypes = {
    contactModal: PropTypes.bool
}