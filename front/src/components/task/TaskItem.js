import React from 'react';
import styled from 'styled-components';
import TaskState from './TaskState';

const TaskContainer = styled.div`
  padding: 15px 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid ${(props) => (props.isOverdue ? '#FF7272' : 'transparent')};
`;

const TaskInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const TaskName = styled.div`
  font-size: 16px;
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
`;

const TaskDescription = styled.p`
  font-size: 12px;
  color: #676767;
`;

const TaskDueDate = styled.div`
  font-size: 12px;
  color: ${(props) => (props.isCloseToDeadline ? '#FF7272' : 'black')};
`;

const TaskActions = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  font-size: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => props.bgColor || '000000'};
  color: white;

  &:hover {
    opacity: 0.8;
  }
`;

const isCloseToDeadline = (dueDate) => {
  if (!dueDate) return false;

  const currentDate = new Date();
  const targetDate = new Date(dueDate);

  currentDate.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  const timeDiff = targetDate - currentDate;
  const daysLeft = timeDiff / (1000 * 60 * 60 * 24);

  return daysLeft <= 3 && daysLeft >= 0;
};

const isOverdue = (dueDate) => {
  if (!dueDate) return false;

  const currentDate = new Date();
  const targetDate = new Date(dueDate);

  currentDate.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  return targetDate < currentDate;
};

function TaskItem({ task, onDelete, onEdit }) {
  return (
    <TaskContainer isOverdue={isOverdue(task.dueDate)}>
      <TaskInfo>
        <TaskName isCompleted={task.status === '완료'}>{task.name}</TaskName>
        <TaskDescription>{task.description}</TaskDescription>
        <TaskDueDate isCloseToDeadline={isCloseToDeadline(task.dueDate)}>
          마감일: {task.dueDate}
        </TaskDueDate>
        <TaskState label={task.status} />
      </TaskInfo>
      <TaskActions>
        <ActionButton bgColor="#6AB6FF" onClick={() => onEdit(task)}>
          수정
        </ActionButton>
        <ActionButton bgColor="#FF7272" onClick={() => onDelete(task.taskId)}>
          삭제
        </ActionButton>
      </TaskActions>
    </TaskContainer>
  );
}

export default TaskItem;
