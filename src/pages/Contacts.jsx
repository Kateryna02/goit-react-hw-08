import ContactList from "../components/contactsList/ContactsList"
import ContactsForm from "../components/form/ContactsForm"
import Filter from "../components/filter/Filter"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchContacts } from "../redux/contactsOps"

export default function Contacts() {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <div className='app'>
          <h1>Phonebook</h1>
          <ContactsForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
      </div>
  )
}
