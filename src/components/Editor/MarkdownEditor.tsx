import React from 'react';

    interface MarkdownEditorProps {
      content: string;
      onChange: (content: string) => void;
      onBlur: () => void;
    }

    export function MarkdownEditor({ content, onChange, onBlur }: MarkdownEditorProps) {
      return (
        <textarea
          value={content}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className="w-full h-[calc(100vh-12rem)] p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono text-gray-700"
          placeholder="Start typing here..."
          autoFocus
        />
      );
    }
