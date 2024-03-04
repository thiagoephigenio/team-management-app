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

export const EmptyListInfo = styled.div`
  height: calc(100vh - 14rem);
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: #969cb3;
  }
`;
