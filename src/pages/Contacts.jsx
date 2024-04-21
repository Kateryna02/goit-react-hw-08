import ContactList from "../components/contactsList/ContactsList"
import ContactsForm from "../components/form/ContactsForm"
import Filter from "../components/filter/Filter"


export default function Contacts() {


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
