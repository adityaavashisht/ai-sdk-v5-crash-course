import { google } from '@ai-sdk/google';
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  createUIMessageStream,
  type ModelMessage,
  type UIMessage,
} from 'ai';

export const POST = async (req: Request): Promise<Response> => {
  const body = await req.json();

  // TODO: get the UIMessage[] from the body
  const messages: UIMessage[] = body.messages;

  // TODO: convert the UIMessage[] to ModelMessage[]
  const modelMessages: ModelMessage[] = convertToModelMessages(messages);

  const streamTextResult = streamText({
    model: google('gemini-2.0-flash'),
    prompt: modelMessages
  });

  // TODO: create a UIMessageStream from the streamTextResult
  const stream = streamTextResult.toUIMessageStream()

  return createUIMessageStreamResponse({
    stream,
  });
};
