import { TableHead, TableHeaderCell, TableRow } from "@tremor/react";

function TableHeadInfo() {
  return (
    
    <TableHead>
      <TableRow className="xl:text-xl md:text-lg">
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Phone Number</TableHeaderCell>
        <TableHeaderCell>Wilaya</TableHeaderCell>
        <TableHeaderCell>Email</TableHeaderCell>
        <TableHeaderCell>Rating</TableHeaderCell>
        <TableHeaderCell>Certification</TableHeaderCell>
      </TableRow>
    </TableHead>
  );
}

export default TableHeadInfo;
