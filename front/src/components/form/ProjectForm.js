import React, { useState } from 'react';
import styled from 'styled-components';
import ActionButton from '../button/ActionButton';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  display: grid;
  gap: 10px;
  background: white;
  padding: 20px;
  width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

function ProjectForm({ onClose, onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    onSubmit({ title, description });
    setTitle('');
    setDescription('');
    onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>프로젝트 추가</h2>
        <Input
          type="text"
          placeholder="프로젝트 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="프로젝트 설명"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <ActionButton onClick={handleSubmit} label="추가" isDelete={false} />
      </ModalContent>
    </Overlay>
  );
}

export default ProjectForm;
