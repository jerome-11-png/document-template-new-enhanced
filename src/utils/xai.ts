import { AIResponse } from '../types';

const API_URL = 'https://api.x.ai/v1/chat/completions';
const API_KEY = 'xai-IJT4BbqvmtouL8DaioAfOuzbUjTGxBYWVX3awgJtuezuvxtcGBl6tkuKxrMcOaL0FE58egBJvQnhe3g1';

export async function generateAIContent(prompt: string, context: string = ''): Promise<string> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: 'You are a professional document editor assistant. Help improve and revise the content while maintaining the original intent.',
          },
          {
            role: 'user',
            content: `Context: Please Always start your response with the requested content directly, without any introductory or concluding remarks. \n\n ${context}\n\nPrompt: ${prompt}`,
          },
        ],
        model: 'grok-beta',
        stream: false,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating AI content:', error);
    throw new Error('Failed to generate AI content');
  }
}
