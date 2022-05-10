import React from 'react';
import {
  PageContainer,
  StyledTable,
  TableHead,
  TableRow,
  TableHeadColumns,
  TableColumn,
  TableBody,
  TableHeadingContainer,
  TableContainer,
  ScrollContainer,
} from 'components/Table/table';

function Table() {
  return (
    <PageContainer>
      <TableContainer>
      <TableHeadingContainer>Hello</TableHeadingContainer>
      <ScrollContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableHeadColumns>Author</TableHeadColumns>
              <TableHeadColumns>Author</TableHeadColumns>
              <TableHeadColumns>Author</TableHeadColumns>
              <TableHeadColumns>Author</TableHeadColumns>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableColumn>Awni</TableColumn>
              <TableColumn>Awni</TableColumn>
              <TableColumn>Awni</TableColumn>
              <TableColumn>Awni</TableColumn>
            </TableRow>
          </TableBody>
        </StyledTable>
        </ScrollContainer>
      </TableContainer>
    </PageContainer>
  );
}
export default Table;
