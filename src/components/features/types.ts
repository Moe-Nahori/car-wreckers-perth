export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  estimatedHours?: number;
  category?: string;
  subtasks?: Task[];
}

export interface Phase {
  name: string;
  tasks: Task[];
}