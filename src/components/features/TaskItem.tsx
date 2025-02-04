"use client";

import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Pencil } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  estimatedHours?: number;
  category?: string;
  subtasks?: Task[];
}

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onEdit: () => void;
  onAddSubtask: () => void;
  showSubtasks?: boolean;
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'bg-red-100 text-red-800';
    case 'medium': return 'bg-yellow-100 text-yellow-800';
    case 'low': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const TaskItem = ({ task, onToggle, onEdit, showSubtasks = true }: TaskItemProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id={task.id}
            checked={task.completed}
            onCheckedChange={onToggle}
          />
          <div>
            <label
              htmlFor={task.id}
              className={`text-sm ${task.completed ? 'line-through text-gray-500' : ''}`}
            >
              {task.title}
            </label>
            {task.description && (
              <p className="text-sm text-gray-500 mt-1">
                {task.description}
              </p>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {task.estimatedHours && (
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              {task.estimatedHours}h
            </div>
          )}
          <Badge className={getPriorityColor(task.priority)}>
            {task.priority}
          </Badge>
          {task.category && (
            <Badge variant="outline">
              {task.category}
            </Badge>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={onEdit}
          >
            <Pencil className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;