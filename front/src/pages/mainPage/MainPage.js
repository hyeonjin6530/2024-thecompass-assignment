import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectList from '../../components/project/ProjectList';
import ActionButton from '../../components/button/ActionButton';
import FormModal from '../../components/form/FormModal';
import dummyData from '../../dummyData/dummyData';

const Container = styled.div`
  padding: 20px;
`;

const ProjectContainer = styled.div`
  display: grid;
  flex-direction: column;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const MainPage = () => {
  const [projects, setProjects] = useState(dummyData);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedProjects, setSelectedProjects] = useState([]);

  const handleAddProject = (newProject) => {
    setProjects([
      ...projects,
      { ...newProject, projectId: (projects.length + 1).toString() },
    ]);
  };

  const handleSelectProject = (projectId) => {
    if (selectedProjects.includes(projectId)) {
      setSelectedProjects(selectedProjects.filter((id) => id !== projectId));
    } else {
      setSelectedProjects([...selectedProjects, projectId]);
    }
  };

  const handleDeleteSelected = () => {
    setProjects(
      projects.filter(
        (project) => !selectedProjects.includes(project.projectId),
      ),
    );
    setSelectedProjects([]);
  };

  return (
    <Container>
      <h1>프로젝트 관리 대시보드</h1>
      <ProjectContainer>
        {projects.map((project) => (
          <ProjectList
            key={project.projectId}
            projectId={project.projectId}
            title={project.title}
            description={project.description}
            isSelected={selectedProjects.includes(project.projectId)}
            onSelect={handleSelectProject}
          />
        ))}
        <ButtonContainer>
          <ActionButton
            label="프로젝트 추가"
            onClick={() => setShowProjectModal(true)}
          />

          <ActionButton
            label="선택된 항목 삭제"
            isDelete
            onClick={handleDeleteSelected}
          />
        </ButtonContainer>
      </ProjectContainer>

      {showProjectModal && (
        <FormModal
          type="project"
          onClose={() => setShowProjectModal(false)}
          onSubmit={handleAddProject}
        />
      )}
    </Container>
  );
};
export default MainPage;
