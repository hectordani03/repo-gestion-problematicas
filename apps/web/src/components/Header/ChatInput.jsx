import avatar from '@/assets/avatar.png';

export default function ChatInput () {
    return (
        <div className="flex items-center bg-gray-200 rounded-xl px-4 py-2 w-10/12 mx-auto mt-10 mb-2">
<svg className="w-8 h-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 20.077V4.616q0-.691.463-1.153T4.615 3h14.77q.69 0 1.152.463T21 4.616v10.769q0 .69-.463 1.153T19.385 17H6.077zM6.5 13.5h7v-1h-7zm0-3h11v-1h-11zm0-3h11v-1h-11z"/></svg>

        <input
          type="text"
          placeholder="Escribe algo"
          className="bg-transparent outline-none px-2 w-full text-sm"
          />
      </div>
    )
}