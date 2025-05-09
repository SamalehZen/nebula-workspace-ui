
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Toggle
      pressed={theme === 'dark'}
      onPressedChange={toggleTheme}
      aria-label="Toggle theme"
      className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700/50 hover:bg-neutral-800/70 data-[state=on]:bg-gradient-to-br data-[state=on]:from-orange-500/20 data-[state=on]:to-red-500/20"
    >
      {theme === 'dark' ? (
        <Moon className="h-4 w-4 text-orange-400" />
      ) : (
        <Sun className="h-4 w-4 text-orange-500" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
