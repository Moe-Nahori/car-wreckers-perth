import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const PROGRESS_FILE_PATH = path.join(process.cwd(), 'PROJECT_PROGRESS.md');

interface Task {
  id: string;
  title: string;
  completed: boolean;
  phase: string;
  category: string;
}

// Helper function to generate consistent task IDs
function generateTaskId(title: string, phase: string): string {
  return Buffer.from(`${phase}-${title}`).toString('base64');
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
      const id = generateTaskId(title, currentPhase);
      tasks.push({
        id,
        title,
        completed,
        phase: currentPhase,
        category: currentCategory || 'general',
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
      if (category && category !== 'general') {
        markdown += `\n#### ${category}\n`;
      }
      phaseTasks.forEach((task) => {
        markdown += `- [${task.completed ? 'x' : ' '}] ${task.title}\n`;
      });
      markdown += '\n';
    }
  }

  return markdown;
}

// GET handler
export async function GET() {
  try {
    const content = await fs.readFile(PROGRESS_FILE_PATH, 'utf-8');
    const tasks = parseMarkdown(content);
    return NextResponse.json({ tasks });
  } catch (error) {
    console.error('Error reading progress:', error);
    return NextResponse.json(
      { error: 'Failed to read progress' },
      { status: 500 }
    );
  }
}

// POST handler
export async function POST(request: Request) {
  try {
    const { title, phase, category } = await request.json();
    const content = await fs.readFile(PROGRESS_FILE_PATH, 'utf-8');
    const tasks = parseMarkdown(content);
    
    const id = generateTaskId(title, phase);
    console.log('Creating new task with ID:', id);
    
    const newTask: Task = {
      id,
      title,
      completed: false,
      phase,
      category: category || 'general',
    };
    
    tasks.push(newTask);
    await fs.writeFile(PROGRESS_FILE_PATH, tasksToMarkdown(tasks));
    
    return NextResponse.json({ task: newTask });
  } catch (error) {
    console.error('Error adding task:', error);
    return NextResponse.json(
      { error: 'Failed to add task' },
      { status: 500 }
    );
  }
}

// PUT handler
export async function PUT(request: Request) {
  try {
    const updates = await request.json();
    console.log('Received update request:', updates);
    
    const content = await fs.readFile(PROGRESS_FILE_PATH, 'utf-8');
    const tasks = parseMarkdown(content);
    
    const taskIndex = tasks.findIndex((t) => t.id === updates.id);
    if (taskIndex === -1) {
      const errorMessage = `Task not found with ID: ${updates.id}. Available IDs: ${tasks.map(t => t.id).join(', ')}`;
      console.error(errorMessage);
      return NextResponse.json(
        { error: errorMessage },
        { status: 404 }
      );
    }

    // Create updated task maintaining the original id and merging updates
    const updatedTask = {
      ...tasks[taskIndex],
      ...updates,
      id: tasks[taskIndex].id, // Ensure ID doesn't change
      phase: updates.phase || tasks[taskIndex].phase, // Maintain phase if not updated
      category: updates.category || tasks[taskIndex].category, // Maintain category if not updated
    };

    tasks[taskIndex] = updatedTask;
    console.log('Updated task:', updatedTask);

    await fs.writeFile(PROGRESS_FILE_PATH, tasksToMarkdown(tasks));
    
    return NextResponse.json({ task: updatedTask });
  } catch (error) {
    console.error('Error updating task:', error);
    return NextResponse.json(
      { error: 'Failed to update task', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// DELETE handler
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Task ID is required' },
        { status: 400 }
      );
    }

    console.log('Attempting to delete task with ID:', id);
    const content = await fs.readFile(PROGRESS_FILE_PATH, 'utf-8');
    const tasks = parseMarkdown(content);
    
    const taskIndex = tasks.findIndex((t) => t.id === id);
    if (taskIndex === -1) {
      return NextResponse.json(
        { error: 'Task not found', requestedId: id },
        { status: 404 }
      );
    }

    const deletedTask = tasks[taskIndex];
    console.log('Deleting task:', deletedTask);
    
    tasks.splice(taskIndex, 1);
    await fs.writeFile(PROGRESS_FILE_PATH, tasksToMarkdown(tasks));
    
    return NextResponse.json({ success: true, deletedTask });
  } catch (error) {
    console.error('Error deleting task:', error);
    return NextResponse.json(
      { error: 'Failed to delete task', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}