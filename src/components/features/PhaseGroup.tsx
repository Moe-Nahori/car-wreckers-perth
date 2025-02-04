"use client";

import { ChevronDown, ChevronRight } from 'lucide-react';
import TaskItem from './TaskItem';
import SubtaskList from './SubtaskList';

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

interface Phase {
  name: string;
  tasks: Task[];
}

interface PhaseGroupProps {
  phase: Phase;
  phaseIndex: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onToggleTask: (taskId: string) => void;
  onEditTask: (task: Task) => void;
  onAddSubtask: (taskId: string) => void;
  filteredTasks: Task[];
}

const PhaseGroup = ({
  phase,
  phaseIndex,
  isExpanded,
  onToggleExpand,
  onToggleTask,
  onEditTask,
  onAddSubtask,
  filteredTasks
}: PhaseGroupProps) => {
  const getPhaseProgress = () => {
    const completed = phase.tasks.filter(task => task.completed).length;
    const total = phase.tasks.length;
    return `${completed}/${total} tasks`;
  };

  return (
    <div className="border rounded-lg p-4">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={onToggleExpand}
      >
        <div className="flex items-center space-x-2">
          {isExpanded ? (
            <ChevronDown className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
          <h3 className="font-medium">{phase.name}</h3>
        </div>
        <div className="text-sm text-gray-500">
          {getPhaseProgress()}
        </div>
      </div>

      {isExpanded && (
        <div className="mt-4 space-y-4 pl-7">
          {filteredTasks.map(task => (
            <div key={task.id} className="space-y-2">
              <TaskItem
                task={task}
                onToggle={() => onToggleTask(task.id)}
                onEdit={() => onEditTask(task)}
                onAddSubtask={() => onAddSubtask(task.id)}
              />
              {task.subtasks && task.subtasks.length > 0 && (
                <SubtaskList
                  parentTask={task}
                  onToggleSubtask={(subtaskId) => onToggleTask(subtaskId)}
                  onEditSubtask={onEditTask}
                  onAddSubtask={() => onAddSubtask(task.id)}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhaseGroup;