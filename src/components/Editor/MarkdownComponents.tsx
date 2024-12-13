import React from 'react';
    import { Components } from 'react-markdown';

    export const MarkdownComponents: Components = {
      h1: ({node, ...props}) => (
        <h1 className="text-2xl font-bold mt-6 mb-4" {...props} />
      ),
      h2: ({node, ...props}) => (
        <h2 className="text-xl font-bold mt-5 mb-3" {...props} />
      ),
      h3: ({node, ...props}) => (
        <h3 className="text-lg font-bold mt-4 mb-2" {...props} />
      ),
      p: ({node, ...props}) => (
        <p className="my-3" {...props} />
      ),
      ul: ({node, ...props}) => (
        <ul className="list-disc pl-6 my-3" {...props} />
      ),
      ol: ({node, ...props}) => (
        <ol className="list-decimal pl-6 my-3" {...props} />
      ),
      blockquote: ({node, ...props}) => (
        <blockquote className="border-l-4 border-primary-500 pl-4 my-4 italic" {...props} />
      ),
      code: ({node, inline, ...props}) => 
        inline ? (
          <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded" {...props} />
        ) : (
          <code className="block bg-gray-100 dark:bg-gray-800 p-3 rounded" {...props} />
        ),
    };
