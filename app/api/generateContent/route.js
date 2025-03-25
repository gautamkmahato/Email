
import { GoogleGenerativeAI } from '@google/generative-ai';

// Your Google Gemini API key
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

export async function POST(request) {
  try {
    // Parse the JSON body
    const { message } = await request.json();

    if (!message) {
      return new Response(
        JSON.stringify({ error: 'Message input is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-pro-exp-02-05', // Use the appropriate model version
    });

    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseModalities: [],
      responseMimeType: 'application/json',
    };

    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: 'user',
          parts: [{ text: message }],
        },
      ],
    });

    // Send message to generate content
    const result = await chatSession.sendMessage(message);

    // Return the response
    return new Response(
      JSON.stringify({ content: result.response.text() }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error generating content:', error);
    return new Response(
      JSON.stringify({ error: 'An error occurred while generating the content.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

