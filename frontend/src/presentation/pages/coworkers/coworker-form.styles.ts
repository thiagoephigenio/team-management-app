import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const SubmitButton = styled.button`
  border: 0;
  border-radius: 5px;
  height: 3rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  background: #33cc95;
  color: #fff;

  &:hover {
    filter: brightness(0.9);
  }
`;
