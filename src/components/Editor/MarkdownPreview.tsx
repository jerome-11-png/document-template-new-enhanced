import React from 'react';
    import ReactMarkdown from 'react-markdown';
    import remarkGfm from 'remark-gfm';
    import { MarkdownComponents } from './MarkdownComponents';

    interface MarkdownPreviewProps {
      content: string;
      onClick: () => void;
      onMouseUp: () => void;
    }

    export function MarkdownPreview({ content, onClick, onMouseUp }: MarkdownPreviewProps) {
      return (
        <div 
          className="prose max-w-none min-h-[calc(100vh-12rem)] p-4 border rounded-lg cursor-text hover:bg-gray-50"
          onClick={onClick}
          onMouseUp={onMouseUp}
        >
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={MarkdownComponents}
          >
            {content || 'Click to start editing...'}
          </ReactMarkdown>
        </div>
      );
    }
