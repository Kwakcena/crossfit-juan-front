import { isEmpty } from "lodash";

import {
  Table,
  TableCell,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  styled,
  TableCellProps,
  tableCellClasses,
} from "@mui/material";

import EmptyTable from "./ReservationEmpty";

import { User } from "../../interfaces";

import { times } from "../../constants/times";

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
      borderBottom: "none",
    },
  },
  tableRow: {
    borderBottom: "1px solid rgba(224, 224, 224, 1)",
  },
  tableHeader: {
    fontWeight: 400,
    fontSize: "1.5rem",
  },
  tableCellText: {
    fontWeight: "bold",
    fontSize: "18px",
  },
};

const UserCell = styled(TableCell)<TableCellProps>(() => ({
  position: "relative",
  "> span": {
    position: "absolute",
    fontSize: "0.7rem",
    top: "5px",
    left: "6px",
  },
}));

interface Props {
  timeTable: {
    [x: string]: User[];
  };
}

export default function ReservationBoard({ timeTable }: Props) {
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table aria-label="simple table" sx={style.table}>
        <TableHead>
          <TableRow sx={style.tableRow}>
            <TableCell colSpan={3} sx={style.tableHeader}>
              예약자 현황
            </TableCell>
          </TableRow>
        </TableHead>
        {isEmpty(timeTable) ? (
          <EmptyTable />
        ) : (
          <TableBody>
            {times.map((time) => (
              <TableRow sx={style.tableRow} key={time}>
                <TableCell sx={style.tableCellText} component="th" scope="row">
                  {time}
                </TableCell>
                {isEmpty(timeTable[time]) ? (
                  <UserCell colSpan={2} align="left">
                    예약자가 없습니다.
                  </UserCell>
                ) : (
                  (timeTable[time] ?? []).map((user, index) => (
                    <UserCell key={user.phone} align="center">
                      <span>{index + 1}</span>
                      {user.name}
                      <br />({user.phone})
                    </UserCell>
                  ))
                )}
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}
