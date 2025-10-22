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
import Modal from './components/ui/Modal';

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPbdModalOpen, setIsPbdModalOpen] = useState(false);
  const [pbdTemplate, setPbdTemplate] = useState('');
  const [projectOverview, setProjectOverview] = useState('');
  const [purposeScope, setPurposeScope] = useState('');
  const [pbdPrinciples, setPbdPrinciples] = useState('');
  const [dataFlow, setDataFlow] = useState('');
  const [compliance, setCompliance] = useState('');
  const [riskAssessment, setRiskAssessment] = useState('');
  const [review, setReview] = useState('');

  const handleCreatePbd = () => {
    const template = `
# Project Development Blueprint (PDB)

## Project Overview
${projectOverview}

## Purpose and Scope
${purposeScope}

## PBD Principles
${pbdPrinciples}

## Data Flow
${dataFlow}

## Compliance
${compliance}

## Risk Assessment
${riskAssessment}

## Review and Approval
${review}
    `;
    setPbdTemplate(template);
    setIsPbdModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary font-sans antialiased">
      <Header onSettingsClick={() => setIsSettingsOpen(true)} onCreatePbd={handleCreatePbd} />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <PbdHeader />
          <div className="space-y-8">
            <ProjectOverviewCard value={projectOverview} onChange={(e) => setProjectOverview(e.target.value)} />
            <PurposeScopeCard value={purposeScope} onChange={(e) => setPurposeScope(e.target.value)} />
            <PbdPrinciplesCard value={pbdPrinciples} onChange={(e) => setPbdPrinciples(e.target.value)} />
            <DataFlowCard value={dataFlow} onChange={(e) => setDataFlow(e.target.value)} />
            <ComplianceCard value={compliance} onChange={(e) => setCompliance(e.target.value)} />
            <RiskAssessmentCard value={riskAssessment} onChange={(e) => setRiskAssessment(e.target.value)} />
            <ReviewCard value={review} onChange={(e) => setReview(e.target.value)} />
          </div>
        </div>
      </main>
      <Settings isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      <Modal isOpen={isPbdModalOpen} onClose={() => setIsPbdModalOpen(false)} title="PBD Template">
        <pre className="bg-brand-surface-alt p-4 rounded-lg text-sm text-brand-text-primary whitespace-pre-wrap">
          {pbdTemplate}
        </pre>
      </Modal>
    </div>
  );
}

export default App;
