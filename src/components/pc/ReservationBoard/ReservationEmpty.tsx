import { TableBody, TableRow, TableCell } from '@mui/material';

export default function ReservationEmpty() {
  return (
    <TableBody>
      <TableRow>
        <TableCell align="center">
          조회된 결과가 없습니다.
        </TableCell>
      </TableRow>
    </TableBody>
  )
}
