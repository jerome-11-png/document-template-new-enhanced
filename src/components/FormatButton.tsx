import React from 'react';
import { FormatOption } from '../types';

interface FormatButtonProps {
  item: FormatOption;
  onFormat: (type: string) => void;
}

export function FormatButton({ item, onFormat }: FormatButtonProps) {
  return (
    <button
      onClick={() => onFormat(item.label)}
      className="p-2 hover:bg-gray-100 rounded-md group relative"
      title={`${item.label} (${item.shortcut})`}
    >
      <item.icon className="w-5 h-5 text-gray-700" />
      <span className="sr-only">{item.label}</span>
      <div className="absolute hidden group-hover:block bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded">
        {item.label}
        <span className="ml-1 text-gray-400">{item.shortcut}</span>
      </div>
    </button>
  );
}
