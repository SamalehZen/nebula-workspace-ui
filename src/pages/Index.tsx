
import React from 'react';
import WorkspaceForm from '@/components/WorkspaceForm';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f8f8] via-[#f0f0f0] to-[#e8e8e8] dark:from-[#1c1c1c] dark:via-[#251a1a] dark:to-[#1f1419] flex flex-col items-center justify-center transition-colors duration-300">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="mb-6 flex items-center">
        <div className="w-8 h-8 mr-2 bg-gradient-to-br from-orange-400 to-red-400 dark:from-orange-500 dark:to-red-500 rounded-full"></div>
        <span className="text-neutral-800 dark:text-white/90 text-xl font-medium">Firebase Studio</span>
        <span className="ml-2 text-xs bg-neutral-200/70 text-neutral-600/70 dark:bg-neutral-700/70 dark:text-white/70 px-2 py-0.5 rounded">PREVIEW</span>
      </div>
      <WorkspaceForm />
    </div>
  );
};

export default Index;
