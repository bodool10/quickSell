import React from 'react';
import TaskCard from '@/pages/TaskCard';

const BoardSection = ({ title, tasks }) => {
  return (
    <div className="board-section">
      <h2>{title}</h2>
      {tasks.map(task => <TaskCard key={task.id} task={task} />)}
    </div>
  );
};

export default BoardSection;
