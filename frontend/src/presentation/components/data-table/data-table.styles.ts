import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  overflow: auto;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    tbody {
      td:first-child {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
      td:last-child {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }

    th {
      color: #969cb3;
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: #ffff;
      color: #969cb3;
      text-wrap: nowrap;
    }
  }
`;

export const TableActions = styled.div`
  display: flex;
  justify-content: end;
`;

export const IconButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 9999px;
  &:hover {
    background: #f0f2f5;
    transition: ease-in-out 0.5s;
  }
`;
