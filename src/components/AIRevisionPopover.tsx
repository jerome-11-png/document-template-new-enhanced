import React, { useState } from 'react';
import { X, Wand2 } from 'lucide-react';
import { generateAIContent } from '../utils/xai';

interface AIRevisionPopoverProps {
  selectedText: string;
  position: { x: number; y: number };
  onRevise: (newContent: string) => void;
  onClose: () => void;
}

export function AIRevisionPopover({ selectedText, position, onRevise, onClose }: AIRevisionPopoverProps) {
  const [instructions, setInstructions] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRevise = async () => {
    try {
      setIsLoading(true);
      const revisedContent = await generateAIContent(instructions, selectedText);
      onRevise(revisedContent);
    } catch (error) {
      console.error('Error revising content:', error);
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  return (
    <div
      className="fixed bg-white rounded-lg shadow-xl p-4 w-96 z-50 border border-gray-200"
      style={{ 
        top: Math.min(position.y + 20, window.innerHeight - 300),
        left: Math.min(position.x, window.innerWidth - 384)
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center text-purple-600">
          <Wand2 className="w-5 h-5 mr-2" />
          <h3 className="font-semibold">AI Revision</h3>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-600 mb-2">Selected text:</div>
        <div className="bg-gray-50 p-2 rounded-md text-sm max-h-20 overflow-y-auto">
          {selectedText}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-1">
          Revision instructions
        </label>
        <textarea
          id="instructions"
          className="w-full h-24 p-2 border rounded-md text-sm resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="E.g., Make it more formal, fix grammar, make it concise..."
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
      </div>

      <div className="flex justify-end space-x-2">
        <button
          onClick={onClose}
          className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
        <button
          onClick={handleRevise}
          disabled={isLoading || !instructions}
          className="px-4 py-1.5 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Revising...
            </>
          ) : (
            <>
              <Wand2 className="w-4 h-4 mr-1.5" />
              Revise with AI
            </>
          )}
        </button>
      </div>
    </div>
  );
}
