import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

export const Button = styled.button`
  margin-top: 1rem;
  margin-left: auto;
  background: #33cc95;
  width: 10rem;
  height: 2rem;
  border-radius: 5px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;

  &:hover {
    filter: brightness(0.9);
  }
`;
