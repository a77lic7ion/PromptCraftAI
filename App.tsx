import React, { useState } from 'react';
import Header from './components/Header';
import PbdHeader from './components/PbdHeader';
import ProjectOverviewCard from './components/ProjectOverviewCard';
import PurposeScopeCard from './components/PurposeScopeCard';
import PbdPrinciplesCard from './components/PbdPrinciplesCard';
import DataFlowCard from './components/DataFlowCard';
import ComplianceCard from './components/ComplianceCard';
import RiskAssessmentCard from './components/RiskAssessmentCard';
import ReviewCard from './components/ReviewCard';
import Settings from './components/Settings';
import { BehaviorDefinition, PromptVariable } from './types';

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary font-sans antialiased">
      <Header onSettingsClick={() => setIsSettingsOpen(true)} />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <PbdHeader />
          <div className="space-y-8">
            <ProjectOverviewCard />
            <PurposeScopeCard />
            <PbdPrinciplesCard />
            <DataFlowCard />
            <ComplianceCard />
            <RiskAssessmentCard />
            <ReviewCard />
          </div>
        </div>
      </main>
      <Settings isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </div>
  );
}

export default App;
