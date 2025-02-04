"use client";

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import TaskItem from './TaskItem';

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

interface SubtaskListProps {
  parentTask: Task;
  onToggleSubtask: (subtaskId: string) => void;
  onEditSubtask: (subtask: Task) => void;
  onAddSubtask: () => void;
}

const SubtaskList = ({
  parentTask,
  onToggleSubtask,
  onEditSubtask,
  onAddSubtask
}: SubtaskListProps) => {
  if (!parentTask.subtasks?.length && !onAddSubtask) return null;

  return (
    <div className="pl-8">
      {parentTask.subtasks?.map(subtask => (
        <TaskItem
          key={subtask.id}
          task={subtask}
          onToggle={() => onToggleSubtask(subtask.id)}
          onEdit={() => onEditSubtask(subtask)}
          onAddSubtask={() => {}}
          showSubtasks={false}
        />
      ))}
      
      <Button
        variant="ghost"
        size="sm"
        onClick={onAddSubtask}
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Subtask
      </Button>
    </div>
  );
};

export default SubtaskList;