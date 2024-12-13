import React, { useState, useEffect } from 'react';
    import { Header } from './components/Header';
    import { FormatBar } from './components/FormatBar';
    import { SectionsSidebar } from './components/SectionsSidebar';
    import { Editor } from './components/Editor';
    import { ContractSelection } from './components/ContractSelection';
    import { ContractTemplate, SectionContent } from './types';
    import { applyFormat } from './utils/formatting';
    import { DarkModeToggle } from './components/DarkModeToggle';
    import { InitialForm } from './components/InitialForm';

    function App() {
      const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null);
      const [sections, setSections] = useState<string[]>([]);
      const [selectedSection, setSelectedSection] = useState<string | null>(null);
      const [sectionContents, setSectionContents] = useState<Record<string, string>>({});
      const [isDarkMode, setIsDarkMode] = useState(false);
      const [showInitialForm, setShowInitialForm] = useState(true);
      const [templateData, setTemplateData] = useState<{ usecase: string; industry: string } | null>(null);

      useEffect(() => {
        if (isDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [isDarkMode]);

      const handleSelectTemplate = (template: ContractTemplate) => {
        setSelectedTemplate(template);
        setSections(template.sections);
        setSectionContents(template.defaultContent);
        setSelectedSection(template.sections[0]);
      };

      const handleFormat = (type: string) => {
        if (!selectedSection) return;
        
        const selection = window.getSelection();
        const newContent = applyFormat(sectionContents[selectedSection] || '', type, selection);
        setSectionContents(prev => ({
          ...prev,
          [selectedSection]: newContent
        }));
      };

      const handleContentChange = (content: string) => {
        if (!selectedSection) return;
        setSectionContents(prev => ({
          ...prev,
          [selectedSection]: content
        }));
      };

      const handleAddSection = (sectionName: string) => {
        setSections(prev => [...prev, sectionName]);
      };

      const handleRemoveSection = (sectionName: string) => {
        setSections(prev => prev.filter(s => s !== sectionName));
        setSectionContents(prev => {
          const newContents = { ...prev };
          delete newContents[sectionName];
          return newContents;
        });
        if (selectedSection === sectionName) {
          setSelectedSection(null);
        }
      };

      const handleCreateTemplate = () => {
        console.log('Create new template');
      };

      const handleFormSubmit = (data: { usecase: string; industry: string }) => {
        setTemplateData(data);
        setShowInitialForm(false);
        const newSections = ["Introduction", "Details", "Conclusion"];
        setSections(newSections);
        setSectionContents({
          Introduction: `## Introduction
          This document outlines the use case for ${data.usecase} in the ${data.industry} industry.`,
          Details: `## Details
          [PLACEHOLDER_1]
          [PLACEHOLDER_2]
          [PLACEHOLDER_3]`,
          Conclusion: `## Conclusion
          [PLACEHOLDER_4]
          This document serves as a template for future use.`,
        });
        setSelectedSection(newSections[0]);
      };

      if (showInitialForm) {
        return <InitialForm onSubmit={handleFormSubmit} />;
      }

      if (!selectedTemplate && !templateData) {
        return <ContractSelection onSelectTemplate={handleSelectTemplate} />;
      }

      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
          <Header 
            title={selectedTemplate ? selectedTemplate.name : "Dynamic Document"}
            onBack={() => setSelectedTemplate(null)}
          >
            <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </Header>
          
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <FormatBar onFormat={handleFormat} />
            
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm min-h-[600px] relative">
              <div className="absolute inset-0 flex">
                <SectionsSidebar
                  sections={sections}
                  selectedSection={selectedSection}
                  onSelectSection={setSelectedSection}
                  onAddSection={handleAddSection}
                  onRemoveSection={handleRemoveSection}
                  onCreateTemplate={handleCreateTemplate}
                />
                <Editor
                  content={selectedSection ? sectionContents[selectedSection] || '' : ''}
                  selectedSection={selectedSection}
                  onContentChange={handleContentChange}
                />
              </div>
            </div>
          </main>
        </div>
      );
    }

    export default App;
