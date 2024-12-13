export function applyFormat(content: string, type: string, selection: Selection | null): string {
  if (!selection) return content;
  
  const selectedText = selection.toString();
  if (!selectedText) return content;

  let formattedText = '';
  const fullContent = content || '';
  const selectionStart = fullContent.indexOf(selectedText);
  const selectionEnd = selectionStart + selectedText.length;

  switch (type) {
    case 'Bold':
      formattedText = `**${selectedText}**`;
      break;
    case 'Italic':
      formattedText = `*${selectedText}*`;
      break;
    case 'Heading 1':
      formattedText = `# ${selectedText}`;
      break;
    case 'Heading 2':
      formattedText = `## ${selectedText}`;
      break;
    case 'Quote':
      formattedText = `> ${selectedText}`;
      break;
    case 'Link':
      formattedText = `[${selectedText}](url)`;
      break;
    case 'List':
      formattedText = selectedText.split('\n').map(line => `- ${line}`).join('\n');
      break;
    default:
      return content;
  }

  return (
    fullContent.substring(0, selectionStart) +
    formattedText +
    fullContent.substring(selectionEnd)
  );
}
