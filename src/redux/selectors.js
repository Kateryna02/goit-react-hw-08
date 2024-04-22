
import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectNameFilter = state => state.filters.name;
export const selectNumberFilter = state => state.filters.phoneNumber;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter, selectNumberFilter],
    (contacts, nameFilter) => {
        const lowercaseNameFilter = nameFilter.toLowerCase();
    
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(lowercaseNameFilter) || 
            contact.number.toLowerCase().includes(lowercaseNameFilter)
        );
    }
);







