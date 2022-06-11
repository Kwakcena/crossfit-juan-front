import styled from '@emotion/styled';

import { Backdrop, CircularProgress } from "@mui/material"

import { isMobile } from "react-device-detect";

const Text = styled.span`
  font-size: 1.5rem;
  margin-top: 20px;
  ${isMobile && `
    font-size: 1.1rem;
  `}
`

export default function Loading({
  text = '로딩중 입니다...',
}: {
  text?: string
}) {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        flexDirection: 'column',
      }}
      open={true}
      onClick={() => ({})}
    >
      <CircularProgress color="inherit" />
      <Text>{text}</Text>
    </Backdrop>
  )
}
