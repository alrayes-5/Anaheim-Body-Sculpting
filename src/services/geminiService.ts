
import { GoogleGenAI, Chat } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are a friendly and professional virtual assistant for "Anaheim Body Sculpting," a medical aesthetic clinic specializing in non-invasive body contouring. Your goal is to answer user questions, provide information about treatments (Sculpt, Tone, Tighten), and encourage them to book a free consultation. Be concise, helpful, and maintain a supportive tone. Do not invent services we don't offer. If asked about pricing, explain that it's personalized and best discussed in a free consultation. If asked to book an appointment, guide them to the contact page or offer to take their details.`;

let ai: GoogleGenAI | null = null;
let chat: Chat | null = null;

const getChat = () => {
    if (!process.env.API_KEY) {
        console.error("API_KEY environment variable not set.");
        throw new Error("API Key is missing.");
    }
    
    if (!ai) {
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }

    if (!chat) {
        chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
            },
        });
    }
    return chat;
}

export const sendMessageToGemini = async (message: string): Promise<string> => {
    try {
        const chatInstance = getChat();
        const response = await chatInstance.sendMessage({ message });
        return response.text ?? "I'm sorry, I was unable to process that. Could you please rephrase?";
    } catch (error) {
        console.error("Error sending message to Gemini:", error);
        return "I'm sorry, I'm having trouble connecting right now. Please try again later or visit our contact page.";
    }
};