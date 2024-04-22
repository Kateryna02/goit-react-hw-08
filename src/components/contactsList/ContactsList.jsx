
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactItem from '../ContactsItem/ContactsItem';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/selectors';
import s from './contactsList.module.css';
import { useEffect } from "react"



const ContactList = () => {

    const filteredContacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleDeleteContact = contactId => {
        dispatch(deleteContact(contactId));
    };
    return (
        <ul className={s.contactList}>
            {filteredContacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} onDeleteContact={handleDeleteContact} />
            ))}
        </ul>
    );
};

export default ContactList;

