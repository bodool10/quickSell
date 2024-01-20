// components/TaskCard.js
import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="card">
      <div>
            <div class="card-header">{task.id}</div>
            <div class="card-title">{task.title}</div>
            <div class="card-metadata">
              <div class="card-type">{task.tag}</div>
            </div>
          </div>
    </div>
  );
};

export default TaskCard;
