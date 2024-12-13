import React, { useState } from 'react';

    interface InitialFormProps {
      onSubmit: (data: { usecase: string; industry: string }) => void;
    }

    export function InitialForm({ onSubmit }: InitialFormProps) {
      const [usecase, setUsecase] = useState('');
      const [industry, setIndustry] = useState('');

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ usecase, industry });
      };

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Document Template Setup
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="usecase"
                  className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1"
                >
                  Usecase
                </label>
                <input
                  type="text"
                  id="usecase"
                  className="w-full p-2 border rounded-md text-gray-700 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={usecase}
                  onChange={(e) => setUsecase(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="industry"
                  className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1"
                >
                  Industry
                </label>
                <input
                  type="text"
                  id="industry"
                  className="w-full p-2 border rounded-md text-gray-700 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                Generate Template
              </button>
            </form>
          </div>
        </div>
      );
    }
