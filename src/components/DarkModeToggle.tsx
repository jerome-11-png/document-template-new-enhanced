import React from 'react';
    import { Moon, Sun } from 'lucide-react';

    interface DarkModeToggleProps {
      isDarkMode: boolean;
      setIsDarkMode: (isDarkMode: boolean) => void;
    }

    export function DarkModeToggle({ isDarkMode, setIsDarkMode }: DarkModeToggleProps) {
      return (
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md"
          title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          )}
        </button>
      );
    }
