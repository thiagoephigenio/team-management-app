import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 10rem;
  width: 100%;
  background: #5429cc;
  justify-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  h2 {
    padding-left: 1rem;
    margin-right: auto;
    color: #ffff;
  }
`;

export const Actions = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 0.875rem;

  a {
    width: 12rem;
    font-size: 1rem;
    font-weight: 600;
    color: #ffff;

    text-align: center;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
