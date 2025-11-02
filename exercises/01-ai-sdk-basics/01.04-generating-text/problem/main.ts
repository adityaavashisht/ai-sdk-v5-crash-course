import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

// TODO: Choose a model. I recommend using the Google Gemini model:
// gemini-2.0-flash-lite
const model = google("gemini-2.0-flash-lite");

const prompt = 'Which countries should you explore first if you are travelling to Europe for the first time?';

const result = await generateText({model, prompt})

console.log(result.text);
