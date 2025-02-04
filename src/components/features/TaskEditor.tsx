"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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

interface TaskEditorProps {
  task: Task | null;
  onClose: () => void;
  onSave: (task: Task) => void;
}

const TaskEditor = ({ task, onClose, onSave }: TaskEditorProps) => {
  if (!task) return null;

  return (
    <Dialog open={!!task} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Title</label>
            <Input
              value={task.title}
              onChange={(e) => onSave({
                ...task,
                title: e.target.value
              })}
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Input
              value={task.description || ''}
              onChange={(e) => onSave({
                ...task,
                description: e.target.value
              })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Estimated Hours</label>
            <Input
              type="number"
              min="0"
              value={task.estimatedHours || ''}
              onChange={(e) => onSave({
                ...task,
                estimatedHours: parseFloat(e.target.value) || undefined
              })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Priority</label>
            <Select
              value={task.priority}
              onValueChange={(value) => onSave({
                ...task,
                priority: value as 'low' | 'medium' | 'high'
              })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low Priority</SelectItem>
                <SelectItem value="medium">Medium Priority</SelectItem>
                <SelectItem value="high">High Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <Select
              value={task.category || ''}
              onValueChange={(value) => onSave({
                ...task,
                category: value
              })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="frontend">Frontend</SelectItem>
                <SelectItem value="backend">Backend</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="testing">Testing</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={() => {
            onSave(task);
            onClose();
          }}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskEditor;