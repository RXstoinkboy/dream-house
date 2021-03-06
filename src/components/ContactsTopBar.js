import React from 'react'
import styles from './styles/ContactsTopBar.module.scss'

import ContactForm from './ContactForm'

const ContactsTopBar = () => {
    return (
        <div className={styles.wrapper}>
            <a href='tel: +1 123 098 567' className={styles.clickable}>phone: +1 123 098 567</a>
            <a href='mailto: dream@house.com' className={styles.clickable}>mail: dream@house.com</a>
            <ContactForm>send message</ContactForm>
        </div>
    );
};

export default ContactsTopBar;