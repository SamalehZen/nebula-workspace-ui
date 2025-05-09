
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ExternalLink } from "lucide-react";
import NextJsIcon from './NextJsIcon';

const WorkspaceForm: React.FC = () => {
  const [projectName, setProjectName] = useState('');
  const [language, setLanguage] = useState('typescript');
  const [features, setFeatures] = useState({
    srcDir: false,
    eslint: false,
    appRouter: false,
    tailwind: true
  });

  const handleFeatureToggle = (feature: keyof typeof features) => {
    setFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature]
    }));
  };

  return (
    <div className="w-full max-w-md">
      <div className="neo-card overflow-hidden bg-[#1c1c1c]/90 border border-neutral-800/50 rounded-xl shadow-glow-orange">
        <div className="px-6 pt-6 pb-4">
          <h1 className="text-2xl font-medium text-white mb-6">New Workspace</h1>
          
          <div className="space-y-6">
            {/* Template Block */}
            <div className="space-y-2">
              <Label className="text-sm text-neutral-400">Template</Label>
              <div className="bg-[#1c1c1c] rounded-md p-3 border border-neutral-800 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <NextJsIcon />
                  <div className="text-white">NextJS</div>
                </div>
                <Button variant="ghost" className="h-8 px-3 flex items-center gap-1 text-neutral-400 hover:text-white border-0">
                  Details <ExternalLink className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
            
            {/* Project Name */}
            <div className="space-y-2">
              <Label htmlFor="projectName" className="text-sm text-neutral-400">Name your workspace</Label>
              <Input 
                id="projectName" 
                placeholder="My NextJS App" 
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="bg-[#1c1c1c] border-neutral-800 text-white focus:border-neutral-700 focus:ring-0"
              />
            </div>
            
            {/* Language Selection */}
            <div className="space-y-2">
              <Label className="text-sm text-neutral-400">Language</Label>
              <RadioGroup 
                defaultValue="typescript" 
                value={language} 
                onValueChange={setLanguage}
                className="flex gap-6"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem 
                    value="javascript" 
                    id="javascript"
                    className="border-neutral-600 text-orange-500"
                  />
                  <Label htmlFor="javascript" className="text-neutral-400 text-sm">JavaScript</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem 
                    value="typescript" 
                    id="typescript"
                    className="border-neutral-600 text-orange-500"
                  />
                  <Label htmlFor="typescript" className="text-neutral-400 text-sm">TypeScript</Label>
                </div>
              </RadioGroup>
            </div>
            
            {/* Feature Checkboxes */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="srcDir" 
                  checked={features.srcDir}
                  onCheckedChange={() => handleFeatureToggle('srcDir')}
                  className="border-neutral-600 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <label
                  htmlFor="srcDir"
                  className="text-sm leading-none text-neutral-400"
                >
                  Use a src/ dir?
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="eslint" 
                  checked={features.eslint}
                  onCheckedChange={() => handleFeatureToggle('eslint')}
                  className="border-neutral-600 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <label
                  htmlFor="eslint"
                  className="text-sm leading-none text-neutral-400"
                >
                  Use ESLint?
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="appRouter" 
                  checked={features.appRouter}
                  onCheckedChange={() => handleFeatureToggle('appRouter')}
                  className="border-neutral-600 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <label
                  htmlFor="appRouter"
                  className="text-sm leading-none text-neutral-400"
                >
                  Use App Router?
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="tailwind" 
                  checked={features.tailwind}
                  onCheckedChange={() => handleFeatureToggle('tailwind')}
                  className="border-neutral-600 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <label
                  htmlFor="tailwind"
                  className="text-sm leading-none text-neutral-400"
                >
                  Use Tailwind?
                </label>
              </div>
            </div>
          </div>
        </div>
        
        {/* Create Button */}
        <div className="bg-[#191919] border-t border-neutral-800 p-4 flex justify-end">
          <Button 
            disabled={!projectName.trim()} 
            className={`bg-neutral-700 hover:bg-neutral-600 text-white ${!projectName.trim() ? 'opacity-50' : ''}`}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceForm;
