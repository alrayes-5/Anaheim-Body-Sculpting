
export type Sender = 'user' | 'bot';

export interface ChatMessage {
  id: number;
  text: string;
  sender: Sender;
  options?: string[];
}