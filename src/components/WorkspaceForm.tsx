
import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";
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
    <div className="bg-neo-bg min-h-screen flex items-center justify-center p-4">
      <div className="neo-card w-full max-w-lg p-8 glow-effect overflow-hidden">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-neo-text mb-2">New Workspace</h1>
          <p className="text-neo-muted">Configure your Next.js project</p>
        </div>
        
        <div className="space-y-6">
          {/* Template Block */}
          <div className="bg-gradient-dark rounded-xl p-4 border border-neo-border/20 shadow-neo-flat flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-black/50 rounded-md p-2 shadow-neo-inner">
                <NextJsIcon />
              </div>
              <div>
                <p className="font-medium text-neo-text">Next.js</p>
                <p className="text-xs text-neo-muted">Full-stack React framework</p>
              </div>
            </div>
            <Button variant="outline" className="neo-button text-xs h-8">Details</Button>
          </div>
          
          {/* Project Name */}
          <div className="space-y-2">
            <Label htmlFor="projectName" className="text-sm text-neo-text">Project Name</Label>
            <Input 
              id="projectName" 
              placeholder="My NextJS App" 
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="neo-input"
            />
          </div>
          
          {/* Language Selection */}
          <div className="space-y-2">
            <Label className="text-sm text-neo-text">Language</Label>
            <RadioGroup 
              defaultValue="typescript" 
              value={language} 
              onValueChange={setLanguage}
              className="flex gap-4"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem 
                  value="javascript" 
                  id="javascript"
                  className="bg-neo-bg border-neo-border/30 shadow-neo-inner text-neo-highlight"
                />
                <Label htmlFor="javascript" className="text-neo-text">JavaScript</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem 
                  value="typescript" 
                  id="typescript"
                  className="bg-neo-bg border-neo-border/30 shadow-neo-inner text-neo-highlight"
                />
                <Label htmlFor="typescript" className="text-neo-text">TypeScript</Label>
              </div>
            </RadioGroup>
          </div>
          
          {/* Feature Checkboxes */}
          <div className="space-y-3">
            <Label className="text-sm text-neo-text">Features</Label>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="srcDir" 
                checked={features.srcDir}
                onCheckedChange={() => handleFeatureToggle('srcDir')}
                className="neo-checkbox"
              />
              <label
                htmlFor="srcDir"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-neo-text"
              >
                Use a src/ dir?
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="eslint" 
                checked={features.eslint}
                onCheckedChange={() => handleFeatureToggle('eslint')}
                className="neo-checkbox"
              />
              <label
                htmlFor="eslint"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-neo-text"
              >
                Use ESLint?
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="appRouter" 
                checked={features.appRouter}
                onCheckedChange={() => handleFeatureToggle('appRouter')}
                className="neo-checkbox"
              />
              <label
                htmlFor="appRouter"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-neo-text"
              >
                Use App Router?
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="tailwind" 
                checked={features.tailwind}
                onCheckedChange={() => handleFeatureToggle('tailwind')}
                className="neo-checkbox"
              />
              <label
                htmlFor="tailwind"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-neo-text"
              >
                Use Tailwind?
              </label>
            </div>
          </div>
          
          {/* Create Button */}
          <div className="pt-4">
            <Button 
              disabled={!projectName.trim()} 
              className={`w-full neo-button ${!projectName.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-glow'}`}
            >
              <Check className="mr-2 h-4 w-4" />
              Create
            </Button>
          </div>
        </div>

        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-neo-highlight/10 rounded-full blur-3xl pointer-events-none animate-pulse-subtle"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-neo-highlight/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </div>
  );
};

export default WorkspaceForm;
