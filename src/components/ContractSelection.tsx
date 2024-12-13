import React from 'react';
import { contractCategories } from '../data/contractTemplates';
import { ContractCategory, ContractTemplate } from '../types';

interface ContractSelectionProps {
  onSelectTemplate: (template: ContractTemplate) => void;
}

export function ContractSelection({ onSelectTemplate }: ContractSelectionProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Select Contract Type</h1>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {contractCategories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <category.icon className="w-6 h-6 text-purple-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">{category.name}</h2>
            </div>
            <p className="text-gray-600 mb-6">{category.description}</p>
            
            <div className="space-y-4">
              {category.contracts.map((template) => (
                <div
                  key={template.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-purple-400 transition-colors cursor-pointer"
                  onClick={() => onSelectTemplate(template)}
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {template.name}
                  </h3>
                  <p className="text-sm text-gray-600">{template.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
