"use client";

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface TaskFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filterPriority: string;
  onPriorityChange: (value: string) => void;
  filterCategory: string;
  onCategoryChange: (value: string) => void;
}

const TaskFilters = ({
  searchTerm,
  onSearchChange,
  filterPriority,
  onPriorityChange,
  filterCategory,
  onCategoryChange,
}: TaskFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      <Input
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="max-w-xs"
      />
      
      <Select
        value={filterPriority}
        onValueChange={onPriorityChange}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Priorities</SelectItem>
          <SelectItem value="high">High Priority</SelectItem>
          <SelectItem value="medium">Medium Priority</SelectItem>
          <SelectItem value="low">Low Priority</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filterCategory}
        onValueChange={onCategoryChange}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="frontend">Frontend</SelectItem>
          <SelectItem value="backend">Backend</SelectItem>
          <SelectItem value="design">Design</SelectItem>
          <SelectItem value="testing">Testing</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TaskFilters;