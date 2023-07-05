import MessageForm from "./MessageForm"
import Messages from "./Messages"

function Main ({messages}) {

    const messageBubbles =  messages.map((message) => {
        return <Messages key={message.id} message={message}/>
    })

    return (
        <main>
        <h2>Messages</h2>
        <section className="messages">
            <ul>
          {messageBubbles}
            </ul>
        </section>
       <MessageForm />
      </main>
    )
}

export default Main