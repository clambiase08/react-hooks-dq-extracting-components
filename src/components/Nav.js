import Contacts from "./Contacts"

function Nav({contacts}) {

    const contactNames =  contacts.map((contact) => {
        return <Contacts key={contact.id} contact={contact}/>
    })

  return (
   <nav>
        <h2>Contacts</h2>
        <ul className="contacts">
            {contactNames}
        </ul>
      </nav>
  ) 
}

export default Nav