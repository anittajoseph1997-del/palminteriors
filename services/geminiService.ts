import { GoogleGenAI } from "@google/genai";

export const getDesignAdvice = async (prompt: string, history: { role: string; parts: { text: string }[] }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: "You are the Lead Designer at Palm Interiors, a premium turnkey interior design, construction, and manufacturing firm. Your tone is professional, confident, and sophisticated. You specialize in end-to-end execution, space planning, and luxury interiors. Palm Interiors operates its primary state-of-the-art manufacturing unit and office in Kochi (Oorakath Estate, Near Varapuzha Bridge). We also have an office in Kottayam (Kunnath Agencies, Thuruthy PO, Changanassery, 686535). We provide services across Kerala and Bangalore. Provide expert advice on materials, layouts, and construction processes, highlighting the benefits of our Kochi-based in-house manufacturing. If asked about contact details, mention the phone number +91 94473 14858.",
    },
  });

  const response = await chat.sendMessage({ message: prompt });
  return response.text;
};

export const generateRoomConcept = async (prompt: string): Promise<string | undefined> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: `A professional architectural photograph of ${prompt}. Modern luxury interior design, perfectly staged, high-end materials, soft natural lighting, minimalist aesthetic, 8k resolution.`,
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "16:9",
      },
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return undefined;
};