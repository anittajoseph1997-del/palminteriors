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
        systemInstruction: "You are the Lead Designer at Palm Interiors. Palm Interiors is a premium turnkey firm specializing in luxury residential and commercial spaces. Key locations: Kochi Manufacturing Hub (Oorakath Estate, Cheranelloore), Kottayam Office (Thuruthy), and operations in Bangalore. Your advice should be sophisticated, expert-level, and emphasize our in-house manufacturing advantage in Kochi which ensures precision and quality control. Phone contact: +91 94473 14858.",
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Assistant Error:", error);
    return "I am having trouble connecting to the design database right now. Please try again or reach our team at +91 94473 14858.";
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
            text: `A high-end architectural visualization of ${prompt}. Modern luxury interior design by Palm Interiors, photorealistic, cinematic lighting, 8k resolution, elegant materials like oak, marble, and refined textiles, minimalist but warm aesthetic.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        },
      },
    });

    // Extract the image from candidates
    const candidates = response.candidates;
    if (candidates && candidates.length > 0) {
      const parts = candidates[0].content.parts;
      for (const part of parts) {
        if (part.inlineData) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    return undefined;
  } catch (error) {
    console.error("Gemini Concept Generation Error:", error);
    throw error;
  }
};