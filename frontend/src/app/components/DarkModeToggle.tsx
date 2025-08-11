'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useThemeStore } from '../../store/themeStore';

export default function DarkModeToggle() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 border border-gray-200 dark:border-gray-600"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <SunIcon className="w-5 h-5 text-yellow-500" />
      ) : (
        <MoonIcon className="w-5 h-5 text-gray-600" />
      )}
    </button>
  );
} 