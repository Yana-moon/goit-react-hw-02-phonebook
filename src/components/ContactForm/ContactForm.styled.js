import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 20px;
  font-weight: 500;
`;

export const InputForm = styled.input`
  height: 20px;
  width: 350px;
  padding: 5px;
  border: 1px solid #b7b7b7;
  border-radius: 4px;
`;

export const ButtonForm = styled.button`
  width: 100px;
  height: 30px;
  padding: 5px;
  font-weight: 500;
  font-size: 14px;
  border-radius: 4px;
  border-color: #0a4ff0;
  background-color: #f9fae6;
`;