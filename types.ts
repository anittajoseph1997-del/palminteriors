
export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  detailedDescription?: string;
  testimonial?: {
    quote: string;
    author: string;
  };
  materials?: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface GeneratedConcept {
  id: string;
  prompt: string;
  imageUrl: string;
  timestamp: number;
}
