
import React from 'react';
import WorkspaceForm from '@/components/WorkspaceForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1c1c1c] via-[#251a1a] to-[#1f1419] flex flex-col items-center justify-center">
      <div className="mb-6 flex items-center">
        <div className="w-8 h-8 mr-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-full"></div>
        <span className="text-white/90 text-xl font-medium">Firebase Studio</span>
        <span className="ml-2 text-xs bg-neutral-700/70 text-white/70 px-2 py-0.5 rounded">PREVIEW</span>
      </div>
      <WorkspaceForm />
    </div>
  );
};

export default Index;
