import { Request, Response } from 'express';
import fs from 'fs/promises';
import path from 'path';

const PROGRESS_FILE_PATH = path.join(process.cwd(), '..', 'PROJECT_PROGRESS.md');

interface Task {
  id: string;
  title: string;
  completed: boolean;
  phase: string;
  category: string;
}

// Helper function to parse markdown into tasks
function parseMarkdown(content: string): Task[] {
  const tasks: Task[] = [];
  const lines = content.split('\n');
  let currentPhase = '';
  let currentCategory = '';

  lines.forEach((line) => {
    if (line.startsWith('### Phase')) {
      currentPhase = line.replace('### ', '').trim();
      currentCategory = '';
    } else if (line.startsWith('#### ')) {
      currentCategory = line.replace('#### ', '').trim();
    } else if (line.startsWith('- [')) {
      const completed = line.includes('- [x]');
      const title = line.replace(/- \[[x ]\] /, '').trim();
      tasks.push({
        id: Buffer.from(title).toString('base64'),
        title,
        completed,
        phase: currentPhase,
        category: currentCategory,
      });
    }
  });

  return tasks;
}

// Helper function to convert tasks back to markdown
function tasksToMarkdown(tasks: Task[]): string {
  let markdown = '# Car Wreckers Perth - Project Progress Tracker\n\n';
  const tasksByPhase = tasks.reduce((acc, task) => {
    if (!acc[task.phase]) {
      acc[task.phase] = {};
    }
    if (!acc[task.phase][task.category]) {
      acc[task.phase][task.category] = [];
    }
    acc[task.phase][task.category].push(task);
    return acc;
  }, {} as Record<string, Record<string, Task[]>>);

  for (const [phase, categories] of Object.entries(tasksByPhase)) {
    markdown += `### ${phase}\n`;
    for (const [category, phaseTasks] of Object.entries(categories)) {
      if (category) {
        markdown += `#### ${category}\n`;
      }
      phaseTasks.forEach((task) => {
        markdown += `- [${task.completed ? 'x' : ' '}] ${task.title}\n`;
      });
      markdown += '\n';
    }
  }

  return markdown;
}

export const getProgress = async (req: Request, res: Response) => {
  try {
    const content = await fs.readFile(PROGRESS_FILE_PATH, 'utf-8');
    const tasks = parseMarkdown(content);
    res.json({ tasks });
  } catch (error) {
    console.error('Error reading progress:', error);
    res.status(500).json({ error: 'Failed to read progress' });
  }
};

export const addTask = async (req: Request, res: Response) => {
  try {
    const { title, phase, category } = req.body;
    const content = await fs.readFile(PROGRESS_FILE_PATH, 'utf-8');
    const tasks = parseMarkdown(content);
    
    const newTask: Task = {
      id: Buffer.from(title).toString('base64'),
      title,
      completed: false,
      phase,
      category,
    };
    
    tasks.push(newTask);
    await fs.writeFile(PROGRESS_FILE_PATH, tasksToMarkdown(tasks));
    
    res.json({ task: newTask });
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({ error: 'Failed to add task' });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id, completed, title } = req.body;
    const content = await fs.readFile(PROGRESS_FILE_PATH, 'utf-8');
    const tasks = parseMarkdown(content);
    
    const taskIndex = tasks.findIndex((t) => t.id === id);
    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    tasks[taskIndex] = {
      ...tasks[taskIndex],
      ...(completed !== undefined && { completed }),
      ...(title !== undefined && { title }),
    };

    await fs.writeFile(PROGRESS_FILE_PATH, tasksToMarkdown(tasks));
    
    res.json({ task: tasks[taskIndex] });
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Failed to update task' });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Task ID is required' });
    }

    const content = await fs.readFile(PROGRESS_FILE_PATH, 'utf-8');
    const tasks = parseMarkdown(content);
    
    const taskIndex = tasks.findIndex((t) => t.id === id);
    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    tasks.splice(taskIndex, 1);
    await fs.writeFile(PROGRESS_FILE_PATH, tasksToMarkdown(tasks));
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Failed to delete task' });
  }
};