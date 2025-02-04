"use client";

import React, { useState } from 'react';
import { Pencil, Trash2, X, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  phase: string;
  category: string;
}

interface TaskItemProps {
  task: Task;
  onUpdate: (id: string, updates: Partial<Omit<Task, 'id'>>) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export function TaskItem({ task, onUpdate, onDelete }: TaskItemProps) {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleToggle = async () => {
    try {
      setIsUpdating(true);
      await onUpdate(task.id, { 
        completed: !task.completed,
        phase: task.phase,
        category: task.category 
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update task status"
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleSave = async () => {
    if (editedTitle.trim() === '') return;
    
    try {
      setIsUpdating(true);
      await onUpdate(task.id, {
        title: editedTitle.trim(),
        phase: task.phase,
        category: task.category,
        completed: task.completed
      });
      setIsEditing(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update task title"
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleCancel = () => {
    setEditedTitle(task.title);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <div className="flex items-center gap-2 py-1">
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-2 py-1 border rounded bg-zinc-800 text-white"
          autoFocus
          disabled={isUpdating}
        />
        <button
          onClick={handleSave}
          className="p-1 text-green-600 hover:text-green-800 disabled:opacity-50"
          disabled={isUpdating}
        >
          <Check size={16} />
        </button>
        <button
          onClick={handleCancel}
          className="p-1 text-red-600 hover:text-red-800 disabled:opacity-50"
          disabled={isUpdating}
        >
          <X size={16} />
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 py-1 group">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
        className="w-4 h-4"
        disabled={isUpdating}
      />
      <span className={task.completed ? 'line-through text-gray-500 flex-1' : 'flex-1'}>
        {task.title}
      </span>
      <button
        onClick={() => setIsEditing(true)}
        className="p-1 text-gray-500 hover:text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50"
        disabled={isUpdating}
      >
        <Pencil size={16} />
      </button>
      <button
        onClick={() => onDelete(task.id)}
        className="p-1 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50"
        disabled={isUpdating}
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}