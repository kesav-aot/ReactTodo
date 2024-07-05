import React from 'react';
import './completedtasklist.css';
const CompletedTaskList = ({ tasks, updateTask, uncompleteTask, setTasks ,openModal}) => {
  console.log("tasks", tasks);

  const clearTask = () => {
    const remainingTasks = tasks.filter(task => !task.completed);
    setTasks(remainingTasks);
  };

  return (
    <div className="completed-task-list" >
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <h4>Completed Tasks</h4>
        <button className='btn2' onClick={clearTask} >Clear Completed</button>
      </div>
      {tasks.map((task, index) => (
        task.completed && (
          <div key={index} style={{ display: 'flex', flexDirection: 'row', gap: '10px', border: '1px solid #D0D5DD', padding: '20px', borderRadius: '8px', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="task">
              <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                <img src="./src/assets/tick.svg" alt="Completed" onClick={() => uncompleteTask(index)} />
                <h3>{task.title}</h3><p className="dot" style={{ backgroundColor: task.completed ? 'green' : 'red' , width: '10px', height: '10px', borderRadius: '50%'}}></p>
              </div>
              <p>{task.description}</p>
              <p><img src="./src/assets/calendar.svg" alt="" /> by {task.dueDate}</p>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className='btn' id='update' data-bs-toggle="modal" data-bs-target="#update" onClick={() => updateTask(index, task)}>
                <img src="./src/assets/Delete.svg" alt="Update" />
              </button>
              <button className='btn' onClick={() => openModal(index)} >
                <img src="./src/assets/Group.svg" alt="Delete" />
              </button>
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default CompletedTaskList;
