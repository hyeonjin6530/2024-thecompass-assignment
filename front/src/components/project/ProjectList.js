import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
  display: flex;
  align-items: center;
  background-color: white;
  height: 80px;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  text-decoration: none;
  color: inherit;
  gap: 20px;
`;

const ProjectItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectName = styled.div`
  font-size: 20px;
  padding-bottom: 5px;
`;

const ProjectDescription = styled.div`
  font-size: 12px;
  color: #676767;
`;

const Checkbox = styled.input`
  width: 25px;
  height: 25px;
`;

function ProjectList({ projectId, title, description, isSelected, onSelect }) {
  return (
    <div>
      <Container to={`/detailpage/${projectId}`}>
        <Checkbox
          type="checkbox"
          checked={isSelected}
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={() => onSelect(projectId)}
        />
        <ProjectItems>
          <ProjectName>{title}</ProjectName>
          <ProjectDescription>{description}</ProjectDescription>
        </ProjectItems>
      </Container>
    </div>
  );
}

export default ProjectList;
