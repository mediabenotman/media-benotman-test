
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateAdAngles = async (productName: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate 5 unique and high-converting marketing angles for an eCommerce product called "${productName}". Focus on psychological triggers and pain points.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: { type: Type.STRING }
      }
    }
  });
  return JSON.parse(response.text || '[]');
};

export const generateUGCScript = async (productName: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Write a high-energy TikTok UGC (User Generated Content) script for "${productName}". Include a hook, body with features/benefits, and a clear CTA. Use emojis.`,
  });
  return response.text;
};

export const generateProductDescription = async (productName: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Write a persuasive, Shopify-ready product description for "${productName}". Use bold headings, bullet points for features, and emotional storytelling.`,
  });
  return response.text;
};
