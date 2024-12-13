import React, { useState } from 'react';
    import { MarkdownPreview } from './Editor/MarkdownPreview';
    import { MarkdownEditor } from './Editor/MarkdownEditor';
    import { AIRevisionPopover } from './AIRevisionPopover';
    import { AIRevisionButton } from './Editor/AIRevisionButton';
    import { useTextSelection } from './Editor/useTextSelection';

    interface EditorProps {
      content: string;
      selectedSection: string | null;
      onContentChange: (content: string) => void;
    }

    export function Editor({ content, selectedSection, onContentChange }: EditorProps) {
      const [isEditing, setIsEditing] = useState(false);
      const { selection, setSelection, handleMouseUp } = useTextSelection();
      const [showAIPopover, setShowAIPopover] = useState(false);

      const handleRevision = (newContent: string) => {
        if (selection) {
          const fullContent = content || '';
          const before = fullContent.substring(0, fullContent.indexOf(selection.text));
          const after = fullContent.substring(fullContent.indexOf(selection.text) + selection.text.length);
          onContentChange(before + newContent + after);
        }
      };

      return (
        <div className="flex-1 p-6 relative">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {selectedSection || 'Select a section'}
          </h2>

          {isEditing ? (
            <MarkdownEditor
              content={content}
              onChange={onContentChange}
              onBlur={() => setIsEditing(false)}
            />
          ) : (
            <MarkdownPreview
              content={content}
              onClick={() => setIsEditing(true)}
              onMouseUp={handleMouseUp}
            />
          )}

          {!isEditing && selection && showAIPopover && (
            <AIRevisionPopover
              selectedText={selection.text}
              position={selection.position}
              onRevise={handleRevision}
              onClose={() => {
                setShowAIPopover(false);
                setSelection(null);
              }}
            />
          )}

          {!isEditing && selection && !showAIPopover && (
            <AIRevisionButton onClick={() => setShowAIPopover(true)} />
          )}
        </div>
      );
    }
