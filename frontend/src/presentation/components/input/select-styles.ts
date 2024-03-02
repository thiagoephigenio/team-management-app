import styled from 'styled-components';

export const Select = styled.select`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border: 1px solid #d4d4d8;
  background: #ffff;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: 2px solid #7964ab;
    box-shadow: 0px 0px 2px #7964ab;
  }
`;
