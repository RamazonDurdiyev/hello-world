import { ActionButton } from "./ActionButton"

export const Contact = () => {

    const handleSendMessage = () => {
        alert("Mesage sent");
    }
    return (
        <div>
            <h2>Contact us</h2>
            <ActionButton text="Send Message" onClick={handleSendMessage}/>
        </div>
    )
}