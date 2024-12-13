import React from 'react';
import { Bold, Italic, List, Heading1, Heading2, Quote, Link, Image } from 'lucide-react';
import { FormatOption } from '../types';
import { FormatButton } from './FormatButton';

interface FormatBarProps {
  onFormat: (type: string) => void;
}

export function FormatBar({ onFormat }: FormatBarProps) {
  const formatOptions: FormatOption[] = [
    { icon: Bold, label: 'Bold', shortcut: '⌘+B' },
    { icon: Italic, label: 'Italic', shortcut: '⌘+I' },
    { icon: List, label: 'List', shortcut: '⌘+L' },
    { icon: Heading1, label: 'Heading 1', shortcut: '⌘+1' },
    { icon: Heading2, label: 'Heading 2', shortcut: '⌘+2' },
    { icon: Quote, label: 'Quote', shortcut: '⌘+Q' },
    { icon: Link, label: 'Link', shortcut: '⌘+K' },
    { icon: Image, label: 'Image', shortcut: '⌘+P' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm mb-4">
      <div className="p-2 flex items-center space-x-2 border-b border-gray-200">
        {formatOptions.map((item) => (
          <FormatButton key={item.label} item={item} onFormat={onFormat} />
        ))}
      </div>
    </div>
  );
}
