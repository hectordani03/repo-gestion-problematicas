import Notification from "./Notification"

export default function NotificacionDropdown () {
    return (
        <div className=" bg-white w-2/12 h-52 absolute right-0 z-50 mt-3 mr-3 rounded-xl shadow-xl mr-5">
            <Notification />
            <Notification />
            <Notification />
            <Notification />
        </div>
    )
}