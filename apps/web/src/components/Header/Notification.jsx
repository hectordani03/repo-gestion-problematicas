import avatar from '@/assets/avatar.png';


export default function Notification () {
    return (
        <>
<div class="bg-white px-4 py-3 rounded-lg shadow-md max-w-xs mx-auto">
            <div class="flex items-center mt-3 hover:bg-gray-100 rounded-lg px-1 py-1 cursor-pointer">
                <div class="flex flex-shrink-0 items-end">
                    <img class="h-16 w-16 rounded-full" src={avatar} />
                </div>
                <div class="ml-3">
                    <span class="font-medium text-sm">John Doe</span>
                    <p class="text-sm">reacted to your comment: "Comment..."</p>
                    <span class="text-sm text-blue font-semibold">a few seconds ago</span>
                </div>
                <div>
                    <svg viewBox="0 0 8 8" fill="currentColor" class="h-4 w-4 text-blue"><circle cx="4" cy="4" r="3"></circle></svg>
                </div>
            </div>
        </div>
        </>
    )
}