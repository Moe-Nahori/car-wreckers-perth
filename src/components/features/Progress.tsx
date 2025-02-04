"use client";

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { TaskItem } from './Progress/TaskItem';
import { useProgress } from '@/hooks/useProgress';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  phase: string;
  category: string;
}

export function Progress() {
  const { toast } = useToast();
  const { tasks, loading, error, addTask, updateTask, deleteTask } = useProgress();
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [selectedPhase, setSelectedPhase] = useState('Phase 1: Frontend Core');
  const [selectedCategory, setSelectedCategory] = useState('general');

  const phases = Array.from(new Set(tasks.map((task) => task.phase))).filter(Boolean);
  const categories = Array.from(
    new Set(tasks.filter((task) => task.phase === selectedPhase).map((task) => task.category || 'general'))
  );

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskTitle.trim()) {
      try {
        await addTask({
          title: newTaskTitle.trim(),
          phase: selectedPhase,
          category: selectedCategory || 'general',
        });
        setNewTaskTitle('');
        toast({
          title: "Success",
          description: "Task added successfully"
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to add task"
        });
      }
    }
  };

  const tasksByPhaseAndCategory = tasks.reduce((acc, task) => {
    if (!acc[task.phase]) {
      acc[task.phase] = {};
    }
    const category = task.category || 'general';
    if (!acc[task.phase][category]) {
      acc[task.phase][category] = [];
    }
    acc[task.phase][category].push(task);
    return acc;
  }, {} as Record<string, Record<string, Task[]>>);

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-4">{error}</div>;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Project Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
          <Select
            value={selectedPhase}
            onValueChange={setSelectedPhase}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select phase" />
            </SelectTrigger>
            <SelectContent>
              {phases.length > 0 ? (
                phases.map((phase) => (
                  <SelectItem key={phase} value={phase}>
                    {phase}
                  </SelectItem>
                ))
              ) : (
                <SelectItem value="Phase 1: Frontend Core">
                  Phase 1: Frontend Core
                </SelectItem>
              )}
            </SelectContent>
          </Select>

          <Select
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.length > 0 ? (
                categories.map((category) => (
                  <SelectItem key={category} value={category || 'general'}>
                    {category || 'General'}
                  </SelectItem>
                ))
              ) : (
                <SelectItem value="general">General</SelectItem>
              )}
            </SelectContent>
          </Select>

          <Input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Add new task..."
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </form>

        <div className="space-y-8">
          {phases.map((phase) => (
            <div key={phase} className="border border-border/50 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">{phase}</h2>
              <div className="space-y-6">
                {Object.entries(tasksByPhaseAndCategory[phase] || {}).map(([category, tasks]) => (
                  <div key={`${phase}-${category}`} className="space-y-2">
                    <h3 className="text-md font-medium text-muted-foreground mb-2">
                      {category === 'general' ? 'General' : category}
                    </h3>
                    {tasks.map((task) => (
                      <TaskItem
                        key={task.id}
                        task={task}
                        onUpdate={updateTask}
                        onDelete={deleteTask}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}