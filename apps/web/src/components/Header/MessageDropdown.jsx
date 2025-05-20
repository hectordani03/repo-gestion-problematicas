import Message from "./Message"
import ChatInput from "./ChatInput"

export default function MessageDropdown () {
    return (
        <div className=" bg-white w-3/12 h-auto absolute right-0 z-50 mt-3 mr-3 rounded-xl shadow-xl">
            <Message />
            <Message />
            <Message />
            <Message />
            <ChatInput />
    </div>
    )
}