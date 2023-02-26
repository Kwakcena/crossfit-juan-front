import { List, ListItem, ListItemText, ListProps, Paper, PaperProps, styled, Typography, TypographyProps } from "@mui/material"

import { Resizable } from 're-resizable';

import { useAppSelector } from "../../../hooks/hooks";

const Wrapper = styled(Paper)<PaperProps>(() => ({
  height: '100%',
}));

const Header = styled(Typography)<TypographyProps>(() => ({
  padding: "16px 0 8px 16px",
  borderBottom: '1px solid rgba(224, 224, 224, 1)',
  position: 'sticky',
  top: 0,
}));

const ListWrapper = styled(List)<ListProps>(() => ({
  overflowY: 'auto',
  maxHeight: '790px',
}))

export default function ReservationFailUserList() {
  const failUsers = useAppSelector(({ app }) => app.failUsers);

  return (
    <Resizable
      minWidth={'15%'}
      maxWidth={'50%'}
      enable={{
        top: false,
        right: false,
        bottom: false,
        left: true,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      handleStyles={{
        left: {
          width: '8px',
          height: '100%',
          left: '-12px',
          backgroundColor: '#d1d5db',
        },
      }}
    >
      <Wrapper elevation={3}>
        <Header variant="h5">예약 실패 리스트</Header>
        <ListWrapper>
          {failUsers.map(({ date, nickName, content }) => (
            <ListItem sx={{ pt: 0, pb: 0 }} key={date}>
              <ListItemText
                primary={nickName}
                secondary={`예약 글: ${JSON.stringify(content)}`}
              />
            </ListItem>
          ))}
        </ListWrapper>
      </Wrapper>
    </Resizable>
  )
}
