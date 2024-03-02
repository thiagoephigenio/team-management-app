import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: 0;
  width: 2.5rem;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const Header = styled.div`
  margin-bottom: 2rem;
  h2 {
    color: #363f5f;
  }
`;

export const Content = styled.div``;
