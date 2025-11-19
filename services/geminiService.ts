import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAssistantResponse = async (
  prompt: string,
  context: string
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const response = await ai.models.generateContent({
      model,
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `System Context: ${context}\n\nUser Query: ${prompt}`
            }
          ]
        }
      ],
      config: {
        systemInstruction: "You are GlassOS Assistant, a helpful AI built into the portfolio website of Musab Yusuf Üstün. You are witty, concise, and knowledgeable about Musab's skills in frontend development, React, Next.js, and Nuxt.js. Keep answers brief and helpful.",
      }
    });
    
    return response.text || "I'm having trouble thinking right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, I couldn't connect to the neural network.";
  }
};