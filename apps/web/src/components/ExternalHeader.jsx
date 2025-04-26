import headerLogo from '../assets/header-logo.png';

export default function ExternalHeader() {
    return (
        <header className="w-full flex justify-between h-32 items-center telefono:h-24 telefono:px-4 tablet:h-28 tablet:px-8 desktop:h-32 desktop:px-20">
            
            {/* Logo + Texto */}
            <div className="flex items-center gap-4 ml-20 telefono:ml-4 telefono:gap-2 tablet:ml-10 tablet:gap-3 desktop:ml-20 desktop:gap-4">
                <img className='w-17  telefono:w-14 tablet:w-16 desktop:w-17' 
                     src={headerLogo} 
                     alt="Logo ReUC" />
                <a href="/" className="text-4xl font-extrabold text-lime-600 telefono:text-2xl tablet:text-3xl desktop:text-4xl">
                    ReUC
                </a>
            </div>

            {/* Navegación */}
            <nav className="flex space-x-4 mr-15 text-xl font-bold gap-7 telefono:mr-4 telefono:gap-3 telefono:text-base tablet:mr-10 tablet:gap-5 tablet:text-lg desktop:mr-15 desktop:gap-7 desktop:text-xl">
                <a href="/about" className="hover:text-gray-700 hover:underline">
                    ¿Qué es <span className='text-lime-700'>ReUC?</span>
                </a>
                <a href="/features" className="hover:text-gray-700 hover:underline">
                    Características
                </a>
                <a href="/help" className="hover:text-gray-700 hover:underline">
                    Ayuda
                </a>
                <a href="/contact" className="hover:text-gray-700 hover:underline">
                    Contacto
                </a>
            </nav>
        </header>
    )
}