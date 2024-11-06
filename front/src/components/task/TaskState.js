import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 50px;
  padding: 3px;
  background-color: #e4f6e1;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 10px;
`;

function TaskState({ label }) {
  return <Button>{label}</Button>;
}

export default TaskState;
