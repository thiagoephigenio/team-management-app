import styled from 'styled-components';

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
`;

export const Button = styled.button<{ $primary?: boolean }>`
  background: ${(props) => (props.$primary ? '#33cc95' : '#ffff')};
  color: ${(props) => (props.$primary ? '#ffff' : '#33cc95')};
  height: 3rem;
  font-size: 1em;
  font-weight: 600;
  padding: 0.25em 1em;
  border: 2px solid #33cc95;
  border-radius: 5px;
  &:hover {
    filter: brightness(0.9);
  }
`;
