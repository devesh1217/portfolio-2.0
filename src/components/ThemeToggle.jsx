'use client';

import { useTheme } from '@/components/theme-provider';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-full p-2.5 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:scale-110 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-yellow-500 transition-transform duration-200" />
      ) : (
        <Moon className="h-5 w-5 text-gray-700 transition-transform duration-200" />
      )}
    </button>
  );
}