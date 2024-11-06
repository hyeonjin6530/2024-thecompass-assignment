import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.isDelete ? '#FF7272' : '#6AB6FF')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    opacity: 0.8;
  }
`;

function ActionButton({ onClick, label, isDelete }) {
  return (
    <Button onClick={onClick} isDelete={isDelete}>
      {label}
    </Button>
  );
}

export default ActionButton;
