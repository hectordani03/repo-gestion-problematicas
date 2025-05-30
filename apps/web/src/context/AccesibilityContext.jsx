import { createContext, useEffect, useState, useContext } from 'react';

const AccessibilityContext = createContext();

export function AccessibilityProvider({ children }) {
    // Modo oscuro
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark'; // Solo si se guardó explícitamente 'dark'
    });

    // Alto contraste
    const [highContrast, setHighContrast] = useState(() => {
        const savedHighContrast = localStorage.getItem('highContrast');
        return savedHighContrast === 'true'; // Solo si se guardó explícitamente 'true'
    });

    // Texto grande
    const [largeText, setLargeText] = useState(() => {
        return localStorage.getItem('largeText') === 'true';
    });

    // Fuente amigable para dislexia
    const [dyslexiaFont, setDyslexiaFont] = useState(() => {
        return localStorage.getItem('dyslexiaFont') === 'true';
    });

    useEffect(() => {
        const root = document.documentElement;

        // Limpiar todas las clases de tema antes de aplicar las nuevas
        root.classList.remove('dark', 'high-contrast');

        if (highContrast) {
            root.classList.add('high-contrast');
            localStorage.setItem('highContrast', 'true');
            localStorage.setItem('theme', 'high-contrast'); // Guarda el estado actual
        } else if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark'); // Guarda el estado actual
            localStorage.setItem('highContrast', 'false'); // Asegúrate de que no esté activo el alto contraste
        } else {
            localStorage.setItem('theme', 'light'); // Si ninguno está activo, es modo claro
            localStorage.setItem('highContrast', 'false'); // Asegúrate de que no esté activo
        }

        // --- Lógica para Texto Grande ---
        if (largeText) {
            root.classList.add('large-text');
            localStorage.setItem('largeText', 'true');
        } else {
            root.classList.remove('large-text');
            localStorage.setItem('largeText', 'false');
        }

        // --- Lógica para Fuente Dislexia ---
        if (dyslexiaFont) {
            root.classList.add('dyslexia-font');
            localStorage.setItem('dyslexiaFont', 'true');
        } else {
            root.classList.remove('dyslexia-font');
            localStorage.setItem('dyslexiaFont', 'false');
        }

    }, [isDark, highContrast, largeText, dyslexiaFont]); // Dependencias del useEffect

    // Toggles de tema:
    const toggleTheme = () => {
        if (highContrast) {
            // Si el alto contraste está activo, desactivarlo e ir a modo oscuro
            setHighContrast(false);
            setIsDark(true);
        } else if (isDark) {
            // Si está en modo oscuro, ir a modo claro
            setIsDark(false);
        } else {
            // Si está en modo claro, ir a modo oscuro
            setIsDark(true);
        }
    };

    const toggleHighContrast = () => {
        if (isDark) {
            // Si el modo oscuro está activo, desactivarlo e ir a alto contraste
            setIsDark(false);
            setHighContrast(true);
        } else if (highContrast) {
            // Si está en alto contraste, ir a modo claro
            setHighContrast(false);
        } else {
            // Si está en modo claro, ir a alto contraste
            setHighContrast(true);
        }
    };

    // Otros Toggles (sin cambios)
    const toggleLargeText = () => setLargeText(prev => !prev);
    const toggleDyslexiaFont = () => setDyslexiaFont(prev => !prev);

    return (
        <AccessibilityContext.Provider value={{
            isDark,
            toggleTheme,
            largeText,
            toggleLargeText,
            highContrast,
            toggleHighContrast,
            dyslexiaFont,
            toggleDyslexiaFont
        }}>
            {children}
        </AccessibilityContext.Provider>
    );
}

export function useAccessibility() {
    return useContext(AccessibilityContext);
}