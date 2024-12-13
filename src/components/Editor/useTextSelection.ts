import { useState, useCallback } from 'react';

    interface Selection {
      text: string;
      position: {
        x: number;
        y: number;
      };
    }

    export function useTextSelection() {
      const [selection, setSelection] = useState<Selection | null>(null);

      const handleMouseUp = useCallback(() => {
        const selectedText = window.getSelection()?.toString();
        if (selectedText) {
          const range = window.getSelection()?.getRangeAt(0);
          const rect = range?.getBoundingClientRect();
          if (rect) {
            setSelection({
              text: selectedText,
              position: { x: rect.left, y: rect.top },
            });
          }
        } else {
          setSelection(null);
        }
      }, []);

      return {
        selection,
        setSelection,
        handleMouseUp,
      };
    }
