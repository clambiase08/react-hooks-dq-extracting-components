
function Messages({message}) {
    return (
            <li className={`message ${message.type}`}>
              <div className="icon">{message.name.charAt(0)}</div>
              <span className="content">{message.content}</span>
            </li>
    )
}

export default Messages