import { GoogleGenAI } from "@google/genai";

export const getDesignAdvice = async (prompt: string, history: { role: string; parts: { text: string }[] }[]) => {
  // Initialize AI instance with apiKey from process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ 
          role: h.role === 'model' ? 'model' : 'user', 
          parts: h.parts 
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: "You are the Lead Designer at Palm Interiors, a premium turnkey interior design and manufacturing firm. Our state-of-the-art manufacturing facility is in Kochi (Oorakath Estate, near Varapuzha Bridge, Cheranelloore). We also have hubs in Kottayam (Thuruthy) and Bangalore. Provide sophisticated, expert technical advice on interior materials (teak, marble, veneers) and construction. Emphasize that our in-house factory ensures unmatched precision and quality control. Phone: +91 94473 14858.",
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Assistant Error:", error);
    return "I apologize, but I'm having trouble connecting to our design servers. Please try again or contact our Kochi office directly at +91 94473 14858.";
  }
};

export const generateRoomConcept = async (prompt: string): Promise<string | undefined> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `High-end luxury architectural visualization: ${prompt}. Designed by Palm Interiors. Photorealistic, 8k resolution, cinematic lighting, sophisticated materials, modern minimalist aesthetic.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        },
      },
    });

    // Check for candidates and extract the inline image data
    if (response.candidates && response.candidates.length > 0) {
      const parts = response.candidates[0].content.parts;
      for (const part of parts) {
        if (part.inlineData) {
          const base64Data = part.inlineData.data;
          const mimeType = part.inlineData.mimeType;
          return `data:${mimeType};base64,${base64Data}`;
        }
      }
    }
    return undefined;
  } catch (error) {
    console.error("Gemini Concept Generation Error:", error);
    throw error;
  }
};