import { TableCell, TableRow } from "@tremor/react";

import { TbCertificate, TbCertificateOff } from "react-icons/tb";

function TableRowInfo({ worker }) {
  const { name, phoneNumber, wilaya, email, isCertified,rating } = worker;

  return (
    <TableRow>
      <TableCell>{name}</TableCell>

      <TableCell>{phoneNumber}</TableCell>
      <TableCell>{wilaya}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell className="text-center">{rating}⭐</TableCell>
      <TableCell className="flex justify-center">
        {isCertified ? (
          <TbCertificate className="text-xl" />
        ) : (
          <TbCertificateOff className="text-xl " />
        )}
      </TableCell>
    </TableRow>
  );
}

export default TableRowInfo;
