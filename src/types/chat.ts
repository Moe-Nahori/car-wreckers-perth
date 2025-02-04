export interface ChatMessage {
  id: string;
  roomId: string;
  sender: {
    id: string;
    name: string;
    type: 'user' | 'agent';
  };
  content: string;
  timestamp: Date;
}

export interface ChatRoom {
  id: string;
  messages: ChatMessage[];
  participants: Set<string>;
}

export interface ChatState {
  isOpen: boolean;
  isMinimized: boolean;
  currentRoomId: string | null;
  messages: ChatMessage[];
}