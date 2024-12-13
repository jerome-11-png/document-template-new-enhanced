import React from 'react';
    import { Wand2 } from 'lucide-react';

    interface AIRevisionButtonProps {
      onClick: () => void;
    }

    export function AIRevisionButton({ onClick }: AIRevisionButtonProps) {
      return (
        <button
          onClick={onClick}
          className="fixed bottom-6 right-6 bg-purple-600 text-white rounded-full p-3 shadow-lg hover:bg-purple-700 transition-colors group"
          title="Revise with AI"
        >
          <Wand2 className="w-6 h-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Revise with AI
          </span>
        </button>
      );
    }
