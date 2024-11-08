import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TaskItem from '../../components/task/TaskItem';
import ActionButton from '../../components/button/ActionButton';
import TaskForm from '../../components/form/TaskForm';
import dummyData from '../../dummyData/dummyData';

const Container = styled.div`
  padding: 20px;
`;

const TaskContainer = styled.div`
  display: grid;
  flex-direction: column;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

function ProjectDetail() {
  const { projectId } = useParams();
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [filterCriterion, setFilterCriterion] = useState('all');

  useEffect(() => {
    const foundProject = dummyData.find(
      (project) => project.projectId === projectId,
    );
    if (foundProject) {
      setTasks(foundProject.tasks);
    }
  }, [projectId]);

  const handleAddOrUpdateTask = (taskData) => {
    if (editTask) {
      setTasks(
        tasks.map((task) =>
          task.taskId === editTask.taskId ? { ...task, ...taskData } : task,
        ),
      );
    } else {
      setTasks([
        ...tasks,
        {
          ...taskData,
          taskId: (tasks.length + 1).toString(),
          status: '진행 중',
        },
      ]);
    }
    setEditTask(null);
    setIsTaskModalOpen(false);
  };

  const handleUpdateTaskStatus = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.taskId === taskId ? { ...task, status: newStatus } : task,
      ),
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.taskId !== taskId));
  };

  const handleOpenEditTask = (task) => {
    setEditTask(task);
    setIsTaskModalOpen(true);
  };

  const handleOpenNewTask = () => {
    setEditTask(null);
    setIsTaskModalOpen(true);
  };

  const getFilteredAndSortedTasks = () => {
    let filteredTasks = tasks;
    if (filterCriterion !== 'all') {
      filteredTasks = tasks.filter((task) => task.status === filterCriterion);
    }

    const sortedTasks = [...filteredTasks].sort(
      (a, b) => new Date(a.dueDate) - new Date(b.dueDate),
    );

    return sortedTasks;
  };

  return (
    <Container>
      <h1>프로젝트 {projectId} </h1>

      <FilterContainer>
        <div>
          <label>필터: </label>
          <select
            value={filterCriterion}
            onChange={(e) => setFilterCriterion(e.target.value)}
          >
            <option value="all">전체</option>
            <option value="진행 중">진행 중</option>
            <option value="완료">완료</option>
          </select>
        </div>
      </FilterContainer>

      <TaskContainer>
        {getFilteredAndSortedTasks().map((task) => (
          <TaskItem
            key={task.taskId}
            task={task}
            onUpdateStatus={handleUpdateTaskStatus}
            onDelete={handleDeleteTask}
            onEdit={handleOpenEditTask}
          />
        ))}
        <ButtonContainer>
          <ActionButton label="태스크 추가" onClick={handleOpenNewTask} />
        </ButtonContainer>
      </TaskContainer>

      {isTaskModalOpen && (
        <TaskForm
          initialData={editTask || {}}
          onSubmit={handleAddOrUpdateTask}
          onClose={() => setIsTaskModalOpen(false)}
        />
      )}
    </Container>
  );
}

export default ProjectDetail;
