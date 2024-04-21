
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactItem from '../ContactsItem/ContactsItem';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/selectors';
import s from './contactsList.module.css';
import { useEffect } from "react"
import { fetchContacts } from '../../redux/contactsOps';


const ContactList = () => {

    const filteredContacts = useSelector(selectFilteredContacts);

    const handleDeleteContact = contactId => {
        dispatch(deleteContact(contactId));
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
        console.log(fetchContacts);
    }, [dispatch]);
    return (
        <ul className={s.contactList}>
            {filteredContacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} onDeleteContact={handleDeleteContact} />
            ))}
        </ul>
    );
};

export default ContactList;

