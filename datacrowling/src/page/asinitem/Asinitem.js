import React from 'react';
import styled from 'styled-components';

const Asinitem = ({ data, asinInput, setAsinInput }) => {
  const deleteHandler = () => {
    setAsinInput(asinInput.filter(item => item !== data));
  };

  return (
    <Container>
      <AsinCode>{data}</AsinCode>
      <DeleteBtn onClick={deleteHandler}>
        <DeleteImg src="images/close.png" alt="DeleteBtn" />
      </DeleteBtn>
    </Container>
  );
};

export default Asinitem;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin-top: 5px;
  margin-right: 10px;
  border-radius: 8px;
  background-color: #ddd;
`;

const AsinCode = styled.p`
  margin: 0 10px;
  font-size: 18px;
`;

const DeleteBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-color: #ddd;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #bbb;
  }
`;

const DeleteImg = styled.img`
  width: 14px;
`;
