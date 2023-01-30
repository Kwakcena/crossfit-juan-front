import { List, ListItem, ListItemText, ListProps, Paper, PaperProps, styled, Typography, TypographyProps } from "@mui/material"
import { isMobile } from "react-device-detect";

import { useAppSelector } from "../../hooks/hooks";

const Wrapper = styled(Paper)<PaperProps>(() => ({
  width: isMobile ? '100%' : '33%',
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
  )
}
