import styled from 'styled-components';

export const PageContainer = styled.div`
  width: calc(100%-16rem);
  margin-left: 16rem;
  padding: 3rem 1rem;
  overflow: hidden;
`;
export const TableContainer = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem,
    rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem;
  position: relative;
  min-width: 0px;
`;
export const TableHeadingContainer = styled.div`
  position: absolute;
  left:2.5%;
  top:-1rem;
  background-color: #449ef0;
  width: 95%;
  border-radius: 0.5rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  box-shadow: rgb(0 0 0 / 14%) 0rem 0.1rem 1rem 0rem,
    rgb(0 187 212 / 40%) 0rem 0.3rem 0.5rem -0.1rem;
  margin: auto;
`;
export const ScrollContainer =styled.div`
overflow-x: scroll;
`;
export const StyledTable = styled.table`
  margin-top: 4rem;
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0px;
  overflow-x: scroll;
`;

export const TableHead = styled.thead`
  opacity: 1;
  background: transparent;
  color: rgb(52, 71, 103);
  box-shadow: none;
`;

export const TableRow = styled.tr`
  color: inherit;
  display: table-row;
  vertical-align: middle;
  outline: 0px;
`;

export const TableHeadColumns = styled.th`
  padding: 12px 24px;
  opacity: 1;
  background: transparent;
  color: rgb(52, 71, 103);
  box-shadow: none;
  border-bottom: 0.0625rem solid rgb(240, 242, 245);
  text-align: left;
`;

export const TableBody = styled.tbody`
  display: table-row-group;
`;

export const TableColumn = styled.td`
  text-align: left;
  padding: 12px 24px;
  opacity: 1;
  background: transparent;
  color: rgb(52, 71, 103);
  box-shadow: none;
  font-size: 0.875rem;
  border-bottom: 0.0625rem solid rgb(240, 242, 245);
`;
