import { useMemo } from "react";
import { isEmpty } from 'lodash';

import {
  Table, TableCell, TableContainer, TableBody, TableHead, TableRow, Typography, Paper,
} from "@mui/material";
import { tableCellClasses } from '@mui/material/TableCell';

import EmptyTable from "./EmptyTable";

import { User } from '../../interfaces';

const style = {
  paper: {
    my: 3,
  },
  title: {
    pt: 2,
    pl: 2,
  },
  table: {
    [`& .${tableCellClasses.root}`]: {
      borderBottom: 'none',
    },
  },
  tableRow: {
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
  },
  tableCellText: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
}

interface Props {
  timeTable: {
    [x: string]: User[]
  }
  maxPersons: number;
}

const getCellNumbers = (max: number) => Array.from({ length: max }, (_, i) => i + 1);

export default function TimeTable({ timeTable, maxPersons }: Props) {
  const persons = useMemo(() => getCellNumbers(maxPersons), [maxPersons]);

  return (
    <TableContainer component={Paper} elevation={3}>
      <Typography sx={style.title} variant="h5" component="h2">
        예약자 현황
      </Typography>
      <Table aria-label="simple table" sx={style.table}>
        <TableHead>
          <TableRow sx={style.tableRow}>
            <TableCell sx={style.tableCellText}>수업 시간</TableCell>
            {persons.map((count) => (
              <TableCell key={count} sx={{ textAlign: 'center' }}>{count}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        {isEmpty(timeTable) ? (
          <EmptyTable />
        ) : (
          // TODO: 다른 컴포넌트로 뺄 것
          <TableBody>
            {Object.entries(timeTable).map(([time, users]) => (
              <TableRow sx={style.tableRow} key={time}>
                <TableCell sx={style.tableCellText} component="th" scope="row">
                  {time}
                </TableCell>
                {users.map((user) => (
                  <TableCell key={user.phone} align="center">
                    {user.name}
                    <br />
                    ({user.phone})
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  )
}
