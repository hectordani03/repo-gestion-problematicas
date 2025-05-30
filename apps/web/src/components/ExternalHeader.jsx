import headerLogo from '../assets/header-logo.png';

export default function ExternalHeader() {
    return (
        <header className="w-full flex justify-between h-32 items-center">
            <div className="flex items-center gap-4 ml-20 mt-3">
                <img className='w-17' src={headerLogo} alt="" />
                <a href="/" className="text-4xl font-extrabold text-lime-600">ReUC</a>
            </div>
            <nav className="flex space-x-4 mr-15 text-xl font-bold gap-7">
                <a href="/about" className="hover:text-gray-700">¿Que es <span className='text-lime-700'>ReUC?</span></a>
                <a href="/about" className="hover:text-gray-700">¿Que es <span className='text-lime-700'>ReUC?</span></a>
                <a href="/contact" className="hover:text-gray-700">Ayuda</a>
                <a href="/contact" className="hover:text-gray-700">Contacto</a>
            </nav>
        </header>
    )
    }