import { LucideIcon } from 'lucide-react';

export interface FormatOption {
  icon: LucideIcon;
  label: string;
  shortcut: string;
}

export interface ContractSection {
  id: string;
  title: string;
  defaultContent: string;
}

export interface ContractCategory {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  contracts: ContractTemplate[];
}

export interface ContractTemplate {
  id: string;
  name: string;
  description: string;
  sections: string[];
  defaultContent: Record<string, string>;
}

export interface AIResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}
