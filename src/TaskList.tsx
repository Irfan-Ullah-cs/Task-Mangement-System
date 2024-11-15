import React from 'react';
import { Task } from './App';

interface TaskListProps {
  tasks: Task[];
  toggleTaskCompletion: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTaskCompletion }) => {
  return (
    <ul className="ul">
      {tasks.map((task) => (
        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className="task-item">
          {task.title}
          <button onClick={() => toggleTaskCompletion(task.id)} className="task-button">
            {task.completed ? 'Undo' : 'Complete'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
