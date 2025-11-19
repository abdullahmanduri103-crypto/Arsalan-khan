import { GoogleGenAI, Type } from "@google/genai";
import { TravelPlan } from '../types';

// Initialize the Gemini API client
// The API key must be provided via process.env.API_KEY
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateManduriGuide = async (interest: string): Promise<TravelPlan | null> => {
  if (!apiKey) {
    console.error("API Key is missing");
    throw new Error("API Key is missing. Please configure process.env.API_KEY.");
  }

  const modelId = 'gemini-2.5-flash';
  
  const prompt = `
    You are an expert travel guide for the mystical and beautiful region of 'Manduri'. 
    (Treat Manduri as a hidden gem destination combining ancient heritage, coastal serenity, and lush nature).
    
    The user is interested in: "${interest}".
    
    Generate a mini 1-day itinerary or guide based on this interest.
    Return the data strictly as JSON matching the requested schema.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "A catchy title for this day plan" },
            vibe: { type: Type.STRING, description: "A few words describing the atmosphere (e.g., 'Relaxing & Culinary')" },
            schedule: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  time: { type: Type.STRING, description: "Time of day (e.g., 'Morning', '10:00 AM')" },
                  activity: { type: Type.STRING, description: "Name of the activity" },
                  description: { type: Type.STRING, description: "Short enticing description" },
                }
              }
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    
    return JSON.parse(text) as TravelPlan;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
