import { Task, Phase } from './types';

export const filterTasks = (
  tasks: Task[], 
  searchTerm: string, 
  filterPriority: string, 
  filterCategory: string
): Task[] => {
  return tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        task.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority = filterPriority === 'all' || task.priority === filterPriority;
    const matchesCategory = filterCategory === 'all' || task.category === filterCategory;
    return matchesSearch && matchesPriority && matchesCategory;
  });
};

export const getPhaseProgress = (phase: Phase): string => {
  const completed = phase.tasks.filter(task => task.completed).length;
  const total = phase.tasks.length;
  return `${completed}/${total} tasks`;
};

export const getTotalProgress = (phases: Phase[]): string => {
  let totalCompleted = 0;
  let totalTasks = 0;
  phases.forEach(phase => {
    totalCompleted += phase.tasks.filter(task => task.completed).length;
    totalTasks += phase.tasks.length;
  });
  const percentage = totalTasks > 0 ? Math.round((totalCompleted / totalTasks) * 100) : 0;
  return `Total Progress: ${percentage}% (${totalCompleted}/${totalTasks} tasks)`;
};