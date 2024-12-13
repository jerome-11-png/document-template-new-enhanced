import React, { useState } from 'react';
    import { Plus, Trash2, FilePlus } from 'lucide-react';

    interface SectionsSidebarProps {
      sections: string[];
      selectedSection: string | null;
      onSelectSection: (section: string) => void;
      onAddSection?: (section: string) => void;
      onRemoveSection?: (section: string) => void;
      onCreateTemplate?: () => void;
    }

    export function SectionsSidebar({
      sections,
      selectedSection,
      onSelectSection,
      onAddSection,
      onRemoveSection,
      onCreateTemplate,
    }: SectionsSidebarProps) {
      const [newSectionName, setNewSectionName] = useState('');
      const [isAdding, setIsAdding] = useState(false);

      const handleAddSection = () => {
        if (newSectionName.trim() && onAddSection) {
          onAddSection(newSectionName.trim());
          setNewSectionName('');
          setIsAdding(false);
        }
      };

      return (
        <div className="w-64 border-r border-gray-200 bg-gray-50 dark:bg-gray-700 p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium text-gray-900 dark:text-white">Sections</h2>
            <div className="flex items-center">
              {onCreateTemplate && (
                <button
                  onClick={onCreateTemplate}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md mr-2"
                  title="Create new template"
                >
                  <FilePlus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              )}
              <button
                onClick={() => setIsAdding(true)}
                className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
                title="Add new section"
              >
                <Plus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>

          {isAdding && (
            <div className="mb-4">
              <input
                type="text"
                value={newSectionName}
                onChange={(e) => setNewSectionName(e.target.value)}
                placeholder="Section name..."
                className="w-full px-3 py-2 border rounded-md text-sm mb-2 text-gray-700 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600"
                autoFocus
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setIsAdding(false)}
                  className="px-2 py-1 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddSection}
                  className="px-2 py-1 text-xs bg-primary-600 text-white rounded-md hover:bg-primary-700"
                >
                  Add Section
                </button>
              </div>
            </div>
          )}

          <div className="space-y-2">
            {sections.map((section) => (
              <div
                key={section}
                className="flex items-center group"
              >
                <button
                  onClick={() => onSelectSection(section)}
                  className={`flex-1 text-left px-3 py-2 rounded-md text-sm ${
                    selectedSection === section
                      ? 'bg-purple-100 text-purple-700 dark:bg-primary-700 dark:text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  {section}
                </button>
                {onRemoveSection && (
                  <button
                    onClick={() => onRemoveSection(section)}
                    className="p-1 opacity-0 group-hover:opacity-100 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md ml-1"
                    title="Remove section"
                  >
                    <Trash2 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }
