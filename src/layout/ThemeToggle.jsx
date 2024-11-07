import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
    // Check if "dark-mode" is in local storage on initial load

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
    )

    // Set dark or light mode in localStorage and add class to html tag

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.body.classList.toggle('dark:bg-darkBackground')
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }

    // Initialize theme on first render based on localStorage
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
            document.body.classList.add('dark:bg-darkBackground')
        } else {
            document.documentElement.classList.remove('dark')
            document.body.classList.remove('dark:bg-darkBackground')
        }
    }, [theme])

    return (
        <button
            onClick={toggleTheme}
            className='text-blue-600 px-2 py-2 m-1 rounded-lg hover:bg-blue-500 hover:bg-opacity-20'
            aria-label="Toggle Dark Mode"
        >
            {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
            )}
        </button>
    )
}

export default ThemeToggle