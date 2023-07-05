import { useState } from "react"

function Contacts({contact}) {
    const [isActive, setIsActive] = useState(false)

    const contactClass = isActive ? "contact active" : "contact"

    function handleClick(e) {
        setIsActive((isActive)=> !isActive)
    }

    return (
        <li className={contactClass} onClick={handleClick}>
            <div className="icon">{contact.name.charAt(0)}</div>{contact.name}
        </li>
    )
}

export default Contacts