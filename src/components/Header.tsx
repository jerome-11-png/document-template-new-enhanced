import React from 'react';
    import { ArrowLeft } from 'lucide-react';
    import { DarkModeToggle } from './DarkModeToggle';

    interface HeaderProps {
      title?: string;
      onBack?: () => void;
      children?: React.ReactNode;
    }

    export function Header({ title = 'Document Editor', onBack, children }: HeaderProps) {
      return (
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-16 flex items-center justify-between">
              <div className="flex items-center">
                {onBack && (
                  <button
                    onClick={onBack}
                    className="mr-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md"
                  >
                    <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                )}
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h1>
              </div>
              <div className="flex items-center">
                {children}
                <button 
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </header>
      );
    }
