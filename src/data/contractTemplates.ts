import { FileText, Briefcase, Building2, Users, Scale, Coins, ShieldCheck, Truck } from 'lucide-react';
import { ContractCategory } from '../types';
import { standardContractSections } from './contractSections';

const createDefaultContent = () => {
  const content: Record<string, string> = {};
  standardContractSections.forEach(section => {
    content[section.title] = section.defaultContent;
  });
  return content;
};

export const contractCategories: ContractCategory[] = [
  {
    id: 'business',
    name: 'Business Contracts',
    description: 'Professional business agreements and contracts',
    icon: Briefcase,
    contracts: [
      {
        id: 'professional-service-agreement',
        name: 'Professional Service Agreement',
        description: 'Comprehensive service agreement for business relationships',
        sections: standardContractSections.map(section => section.title),
        defaultContent: createDefaultContent()
      },
      {
        id: 'consulting-agreement',
        name: 'Consulting Agreement',
        description: 'Specialized agreement for consulting services',
        sections: standardContractSections.map(section => section.title),
        defaultContent: createDefaultContent()
      }
    ]
  },
  {
    id: 'legal',
    name: 'Legal Services',
    description: 'Legal service agreements and retainers',
    icon: Scale,
    contracts: [
      {
        id: 'legal-services-agreement',
        name: 'Legal Services Agreement',
        description: 'Professional legal services contract',
        sections: standardContractSections.map(section => section.title),
        defaultContent: createDefaultContent()
      }
    ]
  }
];
