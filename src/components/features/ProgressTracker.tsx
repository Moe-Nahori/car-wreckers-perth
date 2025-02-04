"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import TaskEditor from './TaskEditor';
import PhaseGroup from './PhaseGroup';
import TaskFilters from './TaskFilters';
import { Task, Phase } from './types';
import { filterTasks, getTotalProgress } from './utils';

const ProgressTracker = () => {
  const { toast } = useToast();
  const [phases, setPhases] = useState<Phase[]>([]);
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPriority, setFilterPriority] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
    fetchProgressData();
  }, []);

  const fetchProgressData = async () => {
    try {
      const response = await fetch('/api/progress');
      const data: { phases: Phase[] } = await response.json();
      if (data.phases) {
        setPhases(data.phases);
        // Initially expand all phases
        const expanded: Record<string, boolean> = {};
        data.phases.forEach((phase: Phase) => {
          expanded[phase.name] = true;
        });
        setExpandedPhases(expanded);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load progress data"
      });
    } finally {
      setLoading(false);
    }
  };

  const togglePhase = (phaseName: string) => {
    setExpandedPhases(prev => ({
      ...prev,
      [phaseName]: !prev[phaseName]
    }));
  };

  const toggleTask = async (taskId: string) => {
    // Find the task and its current completion status
    let currentlyCompleted = false;
    let taskFound = false;

    for (const phase of phases) {
      for (const task of phase.tasks) {
        if (task.id === taskId) {
          currentlyCompleted = task.completed;
          taskFound = true;
          break;
        }
        if (task.subtasks) {
          const subtask = task.subtasks.find(st => st.id === taskId);
          if (subtask) {
            currentlyCompleted = subtask.completed;
            taskFound = true;
            break;
          }
        }
      }
      if (taskFound) break;
    }

    try {
      const response = await fetch('/api/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          taskId,
          completed: !currentlyCompleted,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update task');
      }

      await fetchProgressData();
      
      toast({
        title: "Task Updated",
        description: `Task has been ${!currentlyCompleted ? 'completed' : 'uncompleted'}`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update task"
      });
    }
  };

  const saveTask = async (task: Task) => {
    try {
      const response = await fetch('/api/progress', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task }),
      });

      if (!response.ok) {
        throw new Error('Failed to update task');
      }

      await fetchProgressData();
      setEditingTask(null);
      
      toast({
        title: "Task Updated",
        description: "Task details have been updated successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update task"
      });
    }
  };

  const addSubtask = async (parentTaskId: string) => {
    const newSubtask = {
      title: 'New Subtask',
      completed: false,
      priority: 'medium' as const,
    };

    try {
      const response = await fetch('/api/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          parentTaskId,
          subtask: newSubtask,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add subtask');
      }

      await fetchProgressData();
      
      toast({
        title: "Subtask Added",
        description: "New subtask has been added successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to add subtask"
      });
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <Card>
          <CardHeader>
            <CardTitle>Loading progress data...</CardTitle>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Project Progress Tracker</CardTitle>
          <p className="text-sm text-muted-foreground">
            {getTotalProgress(phases)}
          </p>
          
          <TaskFilters 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            filterPriority={filterPriority}
            onPriorityChange={setFilterPriority}
            filterCategory={filterCategory}
            onCategoryChange={setFilterCategory}
          />
        </CardHeader>

        <CardContent className="space-y-6">
          {phases.map((phase, phaseIndex) => (
            <PhaseGroup
              key={phase.name}
              phase={phase}
              phaseIndex={phaseIndex}
              isExpanded={expandedPhases[phase.name]}
              onToggleExpand={() => togglePhase(phase.name)}
              onToggleTask={toggleTask}
              onEditTask={(task) => setEditingTask(task)}
              onAddSubtask={addSubtask}
              filteredTasks={filterTasks(
                phase.tasks,
                searchTerm,
                filterPriority,
                filterCategory
              )}
            />
          ))}
        </CardContent>
      </Card>

      <TaskEditor
        task={editingTask}
        onClose={() => setEditingTask(null)}
        onSave={saveTask}
      />
    </div>
  );
};

export default ProgressTracker;