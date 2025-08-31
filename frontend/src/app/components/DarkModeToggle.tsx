'use client';

import { useThemeStore } from '../../store/themeStore';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { track } from '@vercel/analytics';

export default function DarkModeToggle() {
  const { isDark, toggleTheme } = useThemeStore();

  const handleToggle = () => {
    const newTheme = !isDark;
    toggleTheme();
    track('theme_toggle', { theme: newTheme ? 'dark' : 'light' });
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-6 h-6">
        <SunIcon 
          className={`w-6 h-6 text-yellow-500 transition-all duration-300 ${
            isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        <MoonIcon 
          className={`absolute top-0 left-0 w-6 h-6 text-blue-500 transition-all duration-300 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
          }`}
        />
      </div>
    </button>
  );
} 